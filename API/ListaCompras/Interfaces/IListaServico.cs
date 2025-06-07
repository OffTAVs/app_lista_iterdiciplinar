using ListaCompras.DTOs;
using ListaCompras.Models;

namespace ListaCompras.Interfaces
{
    public interface IListaServico
    {
        Task<List<ListaModel>> ListarPorUsuarioIdAsync(Guid usuarioId);
        Task<ListaModel?> BuscarPorIdAsync(Guid id);
        Task CriarAsync(ListaCriarDTO dto, Guid usuarioId);
        Task<bool> AtualizarAsync(Guid id, ListaAlterarDTO dto);
        Task<bool> DeletarAsync(Guid id);
    }
}
