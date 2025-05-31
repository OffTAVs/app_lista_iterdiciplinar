using Dapper;
using ListaCompras.Interfaces;
using ListaCompras.Models;
using System.Data;

namespace ListaCompras.Repositories
{
    public class ProdutoRepositorio : IProdutoRepositorio
    {
        private readonly IDbConnection _conexao;

        public ProdutoRepositorio(IDbConnection conexao)
        {
            _conexao = conexao;
        }

        public async Task<ProdutoModel> BuscarPorIdAsync(int id)
        {
            return await _conexao.QueryFirstOrDefaultAsync<ProdutoModel>(
                "SELECT * FROM Produto WHERE Id = @Id", new { Id = id });
        }

        public async Task<List<ProdutoModel>> ListarPorListaIdAsync(int listaId)
        {
            var produtos = await _conexao.QueryAsync<ProdutoModel>(
                "SELECT * FROM Produto WHERE ListaId = @ListaId", new { ListaId = listaId });
            return produtos.ToList();
        }

        public async Task CriarAsync(ProdutoModel produto)
        {
            await _conexao.ExecuteAsync(
                "INSERT INTO Produto (Nome, Descricao, Quantidade, Preco, ListaId) VALUES (@Nome, @Descricao, @Quantidade, @Preco, @ListaId)", produto);
        }

        public async Task AtualizarAsync(ProdutoModel produto)
        {
            await _conexao.ExecuteAsync(
                "UPDATE Produto SET Nome = @Nome, Descricao = @Descricao, Quantidade = @Quantidade, Preco = @Preco WHERE Id = @Id", produto);
        }

        public async Task DeletarAsync(int id)
        {
            await _conexao.ExecuteAsync("DELETE FROM Produto WHERE Id = @Id", new { Id = id });
        }
    }

}
