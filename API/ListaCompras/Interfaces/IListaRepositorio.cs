using ListaCompras.Models;

namespace ListaCompras.Interfaces
{
    public interface IListaRepositorio
    {
        Task<List<ListaModel>> BuscarPorUsuarioIdAsync(Guid usuarioId);
        Task<ListaModel?> BuscarPorIdAsync(Guid id);
        Task CriarAsync(ListaModel lista);
        Task AtualizarAsync(ListaModel lista);
        Task RemoverAsync(Guid id);
    }
}
