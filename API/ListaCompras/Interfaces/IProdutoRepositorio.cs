using ListaCompras.Models;

namespace ListaCompras.Interfaces
{
    public interface IProdutoRepositorio
    {
        Task<ProdutoModel> BuscarPorIdAsync(int id);
        Task<List<ProdutoModel>> ListarPorListaIdAsync(int listaId);
        Task CriarAsync(ProdutoModel produto);
        Task AtualizarAsync(ProdutoModel produto);
        Task DeletarAsync(int id);
    }

}
