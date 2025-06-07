namespace ListaCompras.DTOs
{
    public class ProdutoCriarDTO
    {
        public string Nome { get; set; } = string.Empty;
        public string Descricao { get; set; } = string.Empty;
        public int Quantidade { get; set; }
        public double Preco { get; set; }
        public Guid ListaId { get; set; }
    }
}
