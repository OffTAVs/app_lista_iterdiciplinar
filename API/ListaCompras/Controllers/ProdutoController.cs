using ListaCompras.DTOs;
using ListaCompras.Interfaces;
using ListaCompras.Models;
using Microsoft.AspNetCore.Mvc;

namespace ListaCompras.Controllers
{
    [ApiController]
    [Route("api/produtos")]
    public class ProdutoController : ControllerBase
    {
        private readonly IProdutoRepositorio _produtoRepositorio;

        public ProdutoController(IProdutoRepositorio produtoServico)
        {
            _produtoRepositorio = produtoServico;
        }

        [HttpGet("lista/{listaId}")]
        public async Task<IActionResult> ObterPorListaId(int listaId)
        {
            var produtos = await _produtoRepositorio.ListarPorListaIdAsync(listaId);
            return Ok(produtos);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> ObterPorId(int id)
        {
            var produto = await _produtoRepositorio.BuscarPorIdAsync(id);
            if (produto == null) 
                return NotFound();
            return Ok(produto);
        }

        [HttpPost]
        public async Task<IActionResult> Criar([FromBody] ProdutoCriarDTO dto)
        {
            var produto = new ProdutoModel
            {
                Nome = dto.Nome,
                Descricao = dto.Descricao,
                Quantidade = dto.Quantidade,
                Preco = dto.Preco,
                ListaId = dto.ListaId
            };

            await _produtoRepositorio.CriarAsync(produto);
            return Ok("Produto criado com sucesso.");
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Atualizar(int id, [FromBody] ProdutoAlterarDTO dto)
        {
            var produto = new ProdutoModel
            {
                Nome = dto.Nome,
                Descricao = dto.Descricao,
                Quantidade = dto.Quantidade,
                Preco = dto.Preco
            };
            
            var produtoBuscado = await _produtoRepositorio.BuscarPorIdAsync(id);

            if (produtoBuscado == null)
                return NotFound("Produto não encontrado.");

            if (!string.IsNullOrWhiteSpace(dto.Nome) && dto.Nome != produtoBuscado.Nome)
                produtoBuscado.Nome = dto.Nome;

            if (!string.IsNullOrWhiteSpace(dto.Descricao) && dto.Descricao != produtoBuscado.Descricao)
                produtoBuscado.Descricao = dto.Descricao;

            // Para valores numéricos, atualiza se forem diferentes
            if (dto.Quantidade != produtoBuscado.Quantidade)
                produtoBuscado.Quantidade = dto.Quantidade;

            if (dto.Preco != produtoBuscado.Preco)
                produtoBuscado.Preco = dto.Preco;

            // Chama método de atualização no serviço/repositorio
            await _produtoRepositorio.AtualizarAsync(produtoBuscado);
            return Ok("Produto atualizado com sucesso.");
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Remover(int id)
        {
            await _produtoRepositorio.DeletarAsync(id);
            return Ok("Produto removido com sucesso.");
        }
    }
}
