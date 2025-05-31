namespace ListaCompras.Models
{
    public class ProdutoModel
    {
        public int Id { get; set; }
        public string Nome { get; set; } = string.Empty;
        public string Descricao { get; set; } = string.Empty;
        public int Quantidade { get; set; }
        public double Preco { get; set; }
        public int ListaId { get; set; }
    }
}
