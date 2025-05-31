namespace ListaCompras.Models
{
    public class ListaModel
    {
        public int Id { get; set; }
        public string Nome { get; set; } = string.Empty;
        public string Icone { get; set; } = string.Empty;
        public int UsuarioId { get; set; }
    }
}
