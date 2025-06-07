using ListaCompras.Interfaces;
using ListaCompras.Models;
using MongoDB.Driver;

namespace ListaCompras.Repositories
{
    public class ProdutoRepositorio : IProdutoRepositorio
    {
        private readonly IMongoCollection<ProdutoModel> _produtos;

        public ProdutoRepositorio(IMongoDatabase database)
        {
            _produtos = database.GetCollection<ProdutoModel>("Produtos");
        }

        public async Task<ProdutoModel> BuscarPorIdAsync(Guid id)
        {
            return await _produtos.Find(p => p.Id == id).FirstOrDefaultAsync();
        }

        public async Task<List<ProdutoModel>> ListarPorListaIdAsync(Guid listaId)
        {
            var resultado = await _produtos.Find(p => p.ListaId == listaId).ToListAsync();
            return resultado;
        }

        public async Task CriarAsync(ProdutoModel produto)
        {
            await _produtos.InsertOneAsync(produto);
        }

        public async Task AtualizarAsync(ProdutoModel produto)
        {
            await _produtos.ReplaceOneAsync(p => p.Id == produto.Id, produto);
        }

        public async Task DeletarAsync(Guid id)
        {
            await _produtos.DeleteOneAsync(p => p.Id == id);
        }
    }
}
