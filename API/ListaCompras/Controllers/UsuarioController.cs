using ListaCompras.DTOs;
using ListaCompras.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace ListaCompras.Controllers
{
    [ApiController]
    [Route("api/usuarios")]
    public class UsuarioController : ControllerBase
    {
        private readonly IUsuarioServico _usuarioServico;

        public UsuarioController(IUsuarioServico usuarioServico)
        {
            _usuarioServico = usuarioServico;
        }

        [HttpPost("registrar")]
        public async Task<IActionResult> Registrar([FromBody] UsuarioCadastroDTO dto)
        {
            var sucesso = await _usuarioServico.CadastrarAsync(dto);
            if (!sucesso) 
                return BadRequest("Usuário já existe.");

            return Ok("Usuário registrado com sucesso.");
        }

        [HttpPost("login")]
        public async Task<IActionResult> Login([FromBody] UsuarioLoginDTO dto)
        {
            var token = await _usuarioServico.AutenticarAsync(dto);
            if (string.IsNullOrEmpty(token)) return Unauthorized("Credenciais inválidas.");
            return Ok(new { Token = token });
        }
    }
}
