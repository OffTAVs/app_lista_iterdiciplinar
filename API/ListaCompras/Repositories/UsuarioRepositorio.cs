using Dapper;
using ListaCompras.Interfaces;
using ListaCompras.Models;
using System.Data;

namespace ListaCompras.Repositories
{
    public class UsuarioRepositorio : IUsuarioRepositorio
    {
        private readonly IDbConnection _conexao;

        public UsuarioRepositorio(IDbConnection conexao)
        {
            _conexao = conexao;
        }

        public async Task<UsuarioModel> BuscarPorEmailAsync(string email)
        {
            return await _conexao.QueryFirstOrDefaultAsync<UsuarioModel>(
                "SELECT * FROM Usuario WHERE Email = @Email", new { Email = email });
        }

        public async Task<UsuarioModel> BuscarPorIdAsync(int id)
        {
            return await _conexao.QueryFirstOrDefaultAsync<UsuarioModel>(
                "SELECT * FROM Usuario WHERE Id = @Id", new { Id = id });
        }

        public async Task CriarAsync(UsuarioModel usuario)
        {
            await _conexao.ExecuteAsync(
                "INSERT INTO Usuario (Nome, Email, Senha) VALUES (@Nome, @Email, @Senha)", usuario);
        }
    }

}
