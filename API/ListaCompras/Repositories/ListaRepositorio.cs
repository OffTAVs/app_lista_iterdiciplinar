using Dapper;
using ListaCompras.Interfaces;
using ListaCompras.Models;
using System.Data;

namespace ListaCompras.Repositories
{
    public class ListaRepositorio : IListaRepositorio
    {
        private readonly IDbConnection _conexao;

        public ListaRepositorio(IDbConnection conexao)
        {
            _conexao = conexao;
        }

        public async Task<ListaModel> BuscarPorIdAsync(int id)
        {
            return await _conexao.QueryFirstOrDefaultAsync<ListaModel>(
                "SELECT * FROM Lista WHERE Id = @Id", new { Id = id });
        }

        public async Task<List<ListaModel>> ListarPorUsuarioIdAsync(int usuarioId)
        {
            var listas = await _conexao.QueryAsync<ListaModel>(
                "SELECT * FROM Lista WHERE UsuarioId = @UsuarioId", new { UsuarioId = usuarioId });
            return listas.ToList();
        }

        public async Task CriarAsync(ListaModel lista)
        {
            await _conexao.ExecuteAsync(
                "INSERT INTO Lista (Nome, Icone, UsuarioId) VALUES (@Nome, @Icone, @UsuarioId)", lista);
        }

        public async Task AtualizarAsync(ListaModel lista)
        {
            await _conexao.ExecuteAsync(
                "UPDATE Lista SET Nome = @Nome, Icone = @Icone WHERE Id = @Id", lista);
        }

        public async Task DeletarAsync(int id)
        {
            await _conexao.ExecuteAsync("DELETE FROM Produto WHERE ListaId = @Id", new { Id = id });
            await _conexao.ExecuteAsync("DELETE FROM Lista WHERE Id = @Id", new { Id = id });
        }
    }

}
