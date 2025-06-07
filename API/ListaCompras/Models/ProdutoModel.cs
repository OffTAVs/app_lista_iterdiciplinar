using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace ListaCompras.Models
{
    public class ProdutoModel
    {
        [BsonId]
        [BsonRepresentation(BsonType.String)]
        public Guid Id { get; set; }
        public string Nome { get; set; } = string.Empty;
        public string Descricao { get; set; } = string.Empty;
        public int Quantidade { get; set; }
        public double Preco { get; set; }
        [BsonRepresentation(BsonType.String)]
        public Guid ListaId { get; set; } = Guid.Empty;
    }
}
