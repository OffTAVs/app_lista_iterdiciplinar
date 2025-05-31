using ListaCompras.Models;

namespace ListaCompras.Interfaces
{
    public interface IListaRepositorio
    {
        Task<ListaModel> BuscarPorIdAsync(int id);
        Task<List<ListaModel>> ListarPorUsuarioIdAsync(int usuarioId);
        Task CriarAsync(ListaModel lista);
        Task AtualizarAsync(ListaModel lista);
        Task DeletarAsync(int id);
    }
}
