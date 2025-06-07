using ListaCompras.DTOs;
using ListaCompras.Models;

namespace ListaCompras.Interfaces
{
    public interface IUsuarioServico
    {
        Task<bool> CadastrarAsync(UsuarioCadastroDTO dto);
        Task<string> AutenticarAsync(UsuarioLoginDTO dto);
    }

}
