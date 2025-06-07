using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Bson;

namespace ListaCompras.Models
{
    public class ListaModel
    {
        [BsonId]
        [BsonRepresentation(BsonType.String)]
        public Guid Id { get; set; } = Guid.Empty;
        public string Nome { get; set; } = "";
        public string Icone { get; set; } = "";
        [BsonRepresentation(BsonType.String)]
        public Guid UsuarioId { get; set; } = Guid.Empty;
    }
}
