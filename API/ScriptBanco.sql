create database ListaCompras;
GO

Use ListaCompras;
GO


-- Tabela: Usuario
CREATE TABLE Usuario (
    Id int NOT NULL PRIMARY KEY IDENTITY,
    Nome NVARCHAR(100) NOT NULL,
    Email NVARCHAR(100) NOT NULL UNIQUE,
    Senha NVARCHAR(200) NOT NULL
);
GO

-- Tabela: Lista
CREATE TABLE Lista (
    Id int NOT NULL PRIMARY KEY IDENTITY,
    Nome NVARCHAR(100) NOT NULL,
    Icone NVARCHAR(50) NOT NULL,
    UsuarioId int NOT NULL,
    CONSTRAINT FK_Lista_Usuario FOREIGN KEY (UsuarioId) REFERENCES Usuario(Id) ON DELETE CASCADE
);
GO

-- Tabela: Produto
CREATE TABLE Produto (
    Id int NOT NULL PRIMARY KEY IDENTITY,
    Nome NVARCHAR(100) NOT NULL,
    Descricao NVARCHAR(500) NULL,
    Quantidade INT NOT NULL,
    Preco FLOAT NOT NULL,
    ListaId int NOT NULL,
    CONSTRAINT FK_Produto_Lista FOREIGN KEY (ListaId) REFERENCES Lista(Id) ON DELETE CASCADE
);
GO