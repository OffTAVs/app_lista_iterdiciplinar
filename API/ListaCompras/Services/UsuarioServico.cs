using ListaCompras.DTOs;
using ListaCompras.Interfaces;
using ListaCompras.Models;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace ListaCompras.Services
{
    public class UsuarioServico : IUsuarioServico
    {
        private readonly IUsuarioRepositorio _repositorio;
        private readonly IConfiguration _configuracao;

        public UsuarioServico(IUsuarioRepositorio repositorio, IConfiguration configuracao)
        {
            _repositorio = repositorio;
            _configuracao = configuracao;
        }

        public async Task<bool> CadastrarAsync(UsuarioCadastroDTO dto)
        {
            var usuarioExistente = await _repositorio.BuscarPorEmailAsync(dto.Email);

            if (usuarioExistente != null)
                return false; // Usuário já existe

            var usuario = new UsuarioModel
            {
                Nome = dto.Nome,
                Email = dto.Email,
                Senha = BCrypt.Net.BCrypt.HashPassword(dto.Senha)
            };

            await _repositorio.CriarAsync(usuario);
            return true;
        }

        public async Task<string> AutenticarAsync(UsuarioLoginDTO dto)
        {
            var usuario = await _repositorio.BuscarPorEmailAsync(dto.Email);
            if (usuario == null || !BCrypt.Net.BCrypt.Verify(dto.Senha, usuario.Senha))
                return null;

            var tokenHandler = new JwtSecurityTokenHandler();
            var chave = Encoding.ASCII.GetBytes(_configuracao["Jwt:Key"]!);

            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(new Claim[] {
                new Claim(ClaimTypes.NameIdentifier, usuario.Id.ToString()),
                new Claim(ClaimTypes.Email, usuario.Email)
            }),
                Expires = DateTime.UtcNow.AddHours(2),
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(chave), SecurityAlgorithms.HmacSha256Signature)
            };

            var token = tokenHandler.CreateToken(tokenDescriptor);
            return tokenHandler.WriteToken(token);
        }
    }

}
