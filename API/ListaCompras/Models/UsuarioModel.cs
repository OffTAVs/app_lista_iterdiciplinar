using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace ListaCompras.Models
{
    public class UsuarioModel
    {
        [BsonId]
        [BsonRepresentation(BsonType.String)]
        public Guid Id { get; set; } = Guid.Empty;
        public string Nome { get; set; } = string.Empty;
        public string Email { get; set; } = string.Empty;
        public string Senha { get; set; } = string.Empty;
    }
}
