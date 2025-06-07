namespace ListaCompras.DTOs
{
    public class ProdutoAlterarDTO
    {
        public string Nome { get; set; } = string.Empty;
        public string Descricao { get; set; } = string.Empty;
        public int Quantidade { get; set; }
        public double Preco { get; set; }
    }
}
