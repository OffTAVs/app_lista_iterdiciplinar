using ListaCompras.Interfaces;
using ListaCompras.Models;
using MongoDB.Driver;

namespace ListaCompras.Repositories
{
    public class ListaRepositorio : IListaRepositorio
    {
        private readonly IMongoCollection<ListaModel> _listas;
        private readonly IMongoCollection<ProdutoModel> _produtos;

        public ListaRepositorio(IMongoDatabase db)
        {
            _listas = db.GetCollection<ListaModel>("Listas");
            _produtos = db.GetCollection<ProdutoModel>("Produtos");
        }

        public async Task<List<ListaModel>> BuscarPorUsuarioIdAsync(Guid usuarioId) =>
            await _listas.Find(l => l.UsuarioId == usuarioId).ToListAsync();

        public async Task<ListaModel?> BuscarPorIdAsync(Guid id) =>
            await _listas.Find(l => l.Id == id).FirstOrDefaultAsync();

        public async Task CriarAsync(ListaModel lista) =>
            await _listas.InsertOneAsync(lista);

        public async Task AtualizarAsync(ListaModel lista) =>
            await _listas.ReplaceOneAsync(l => l.Id == lista.Id, lista);

        public async Task RemoverAsync(Guid id)
        {
            // Remove todos os produtos dessa lista
            await _produtos.DeleteManyAsync(p => p.ListaId == id);

            // Depois remove a própria lista
            await _listas.DeleteOneAsync(l => l.Id == id);
        }
    }

}
