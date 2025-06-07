using ListaCompras.DTOs;
using ListaCompras.Interfaces;
using ListaCompras.Models;

namespace ListaCompras.Services
{
    public class ListaServico : IListaServico
    {
        private readonly IListaRepositorio _repositorio;

        public ListaServico(IListaRepositorio repositorio)
        {
            _repositorio = repositorio;
        }

        public async Task<List<ListaModel>> ListarPorUsuarioIdAsync(Guid usuarioId)
        {
            return await _repositorio.BuscarPorUsuarioIdAsync(usuarioId);
        }

        public async Task<ListaModel?> BuscarPorIdAsync(Guid id)
        {
            return await _repositorio.BuscarPorIdAsync(id);
        }

        public async Task CriarAsync(ListaCriarDTO dto, Guid usuarioId)
        {
            var novaLista = new ListaModel
            {
                Nome = dto.Nome,
                Icone = dto.Icone,
                UsuarioId = usuarioId
            };

            await _repositorio.CriarAsync(novaLista);
        }

        public async Task<bool> AtualizarAsync(Guid id, ListaAlterarDTO dto)
        {
            var lista = await _repositorio.BuscarPorIdAsync(id);
            if (lista == null) return false;

            if (!string.IsNullOrWhiteSpace(dto.Nome) && dto.Nome != lista.Nome)
                lista.Nome = dto.Nome;

            if (!string.IsNullOrWhiteSpace(dto.Icone) && dto.Icone != lista.Icone)
                lista.Icone = dto.Icone;

            await _repositorio.AtualizarAsync(lista);
            return true;
        }

        public async Task<bool> DeletarAsync(Guid id)
        {
            var lista = await _repositorio.BuscarPorIdAsync(id);
            if (lista == null) return false;

            await _repositorio.RemoverAsync(id);
            return true;
        }
    }
}
