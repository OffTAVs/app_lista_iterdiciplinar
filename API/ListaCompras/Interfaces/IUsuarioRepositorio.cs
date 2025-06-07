using ListaCompras.Models;

namespace ListaCompras.Interfaces
{
    public interface IUsuarioRepositorio
    {
        Task<UsuarioModel> BuscarPorEmailAsync(string email);
        Task<UsuarioModel> BuscarPorIdAsync(Guid id);
        Task CriarAsync(UsuarioModel usuario);
    }

}
