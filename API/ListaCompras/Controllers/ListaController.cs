using ListaCompras.DTOs;
using ListaCompras.Interfaces;
using ListaCompras.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;

namespace ListaCompras.Controllers
{
    [ApiController]
    [Route("api/listas")]
    public class ListaController : ControllerBase
    {
        private readonly IListaRepositorio _listaServico;

        public ListaController(IListaRepositorio listaServico)
        {
            _listaServico = listaServico;
        }

        [HttpGet("usuario")]
        [Authorize]
        public async Task<IActionResult> ObterPorUsuarioId()
        {
            var userIdClaim = User.FindFirst(ClaimTypes.NameIdentifier);
            if (userIdClaim == null || !Guid.TryParse(userIdClaim.Value, out var idUsuario))
            {
                return Unauthorized("Usuário inválido.");
            }

            var listas = await _listaServico.BuscarPorUsuarioIdAsync(idUsuario);
            return Ok(listas);
        }

        [HttpGet("{id}")]
        [Authorize]
        public async Task<IActionResult> ObterPorId(Guid id)
        {
            var lista = await _listaServico.BuscarPorIdAsync(id);
            if (lista == null) return NotFound();
            return Ok(lista);
        }

        [HttpPost]
        [Authorize]
        public async Task<IActionResult> Criar([FromBody] ListaCriarDTO dto)
        {
            var userIdClaim = User.FindFirst(ClaimTypes.NameIdentifier);
            if (userIdClaim == null || !Guid.TryParse(userIdClaim.Value, out var idUsuario))
            {
                return Unauthorized("Usuário inválido.");
            }

            var lista = new ListaModel
            {
                Id = Guid.NewGuid(),
                Nome = dto.Nome,
                Icone = dto.Icone,
                UsuarioId = idUsuario
            };

            await _listaServico.CriarAsync(lista);
            return Ok("Lista criada com sucesso.");
        }

        [HttpPut("{id}")]
        [Authorize]
        public async Task<IActionResult> Atualizar(Guid id, [FromBody] ListaAlterarDTO dto)
        {
            var listaBuscada = await _listaServico.BuscarPorIdAsync(id);

            if (listaBuscada == null) return NotFound("Lista não encontrada.");

            if (!string.IsNullOrWhiteSpace(dto.Nome) && dto.Nome != listaBuscada.Nome)
                listaBuscada.Nome = dto.Nome;

            if (!string.IsNullOrWhiteSpace(dto.Icone) && dto.Icone != listaBuscada.Icone)
                listaBuscada.Icone = dto.Icone;

            await _listaServico.AtualizarAsync(listaBuscada);
            return Ok("Lista atualizada com sucesso.");
        }

        [HttpDelete("{id}")]
        [Authorize]
        public async Task<IActionResult> Remover(Guid id)
        {
            await _listaServico.RemoverAsync(id);
            return Ok("Lista removida com sucesso.");
        }
    }
}
