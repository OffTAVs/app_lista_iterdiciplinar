using ListaCompras.Models;

namespace ListaCompras.Interfaces
{
    public interface IProdutoRepositorio
    {
        Task<ProdutoModel> BuscarPorIdAsync(Guid id);
        Task<List<ProdutoModel>> ListarPorListaIdAsync(Guid listaId);
        Task CriarAsync(ProdutoModel produto);
        Task AtualizarAsync(ProdutoModel produto);
        Task DeletarAsync(Guid id);
    }

}
