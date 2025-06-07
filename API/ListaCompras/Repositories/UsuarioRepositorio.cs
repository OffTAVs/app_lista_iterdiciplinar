using ListaCompras.Interfaces;
using ListaCompras.Models;
using MongoDB.Driver;

namespace ListaCompras.Repositories
{
    public class UsuarioRepositorio : IUsuarioRepositorio
    {
        private readonly IMongoCollection<UsuarioModel> _usuarios;

        public UsuarioRepositorio(IMongoDatabase db)
        {
            _usuarios = db.GetCollection<UsuarioModel>("Usuarios");
        }

        public async Task<UsuarioModel> BuscarPorEmailAsync(string email)
        {
            return await _usuarios.Find(u => u.Email == email).FirstOrDefaultAsync();
        }

        public async Task<UsuarioModel> BuscarPorIdAsync(Guid id)
        {
            return await _usuarios.Find(u => u.Id == id).FirstOrDefaultAsync();
        }

        public async Task CriarAsync(UsuarioModel usuario)
        {
            await _usuarios.InsertOneAsync(usuario);
        }
    }
}
