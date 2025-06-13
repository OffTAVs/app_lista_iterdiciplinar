import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

export default function CadastroItem({ navigation }) {
  const [nomeLista, setNomeLista] = useState('Nome da Lista');
  const [nome, setNome] = useState('');
  const [descricao, setDescricao] = useState('');
  const [preco, setPreco] = useState('');
  const [quantidade, setQuantidade] = useState(1);

  const handleSubmit = () => {
    // Lógica para cadastrar o item
    alert(`Item cadastrado!\nNome: ${nome}\nDescrição: ${descricao}\nPreço: ${preco}\nQuantidade: ${quantidade}`);
    setNome('');
    setDescricao('');
    setPreco('');
    setQuantidade(1);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Text style={styles.menuButton}>☰</Text>
        </TouchableOpacity>
        <TextInput
          style={styles.nomeListaInput}
          value={nomeLista}
          onChangeText={setNomeLista}
        />
        <TouchableOpacity>
          <Text style={styles.menuButton}>⋮</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.form}>
        <Text style={styles.label}>Nome</Text>
        <TextInput
          style={styles.input}
          placeholder="Nome"
          value={nome}
          onChangeText={setNome}
        />
        <Text style={styles.label}>Descrição</Text>
        <TextInput
          style={styles.input}
          placeholder="Descrição"
          value={descricao}
          onChangeText={setDescricao}
        />
        <Text style={styles.label}>Preço</Text>
        <TextInput
          style={styles.input}
          placeholder="R$"
          value={preco}
          onChangeText={setPreco}
          keyboardType="numeric"
        />
        <Text style={styles.label}>Quantidade</Text>
        <View style={styles.quantidadeContainer}>
          <TouchableOpacity
            style={styles.menos}
            onPress={() => setQuantidade(q => Math.max(1, q - 1))}
          >
            <Text style={styles.menosText}>-</Text>
          </TouchableOpacity>
          <Text style={styles.qtd}>{quantidade}</Text>
          <TouchableOpacity
            style={styles.mais}
            onPress={() => setQuantidade(q => q + 1)}
          >
            <Text style={styles.maisText}>+</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.cadastrar} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Cadastrar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#d3ded3',
    padding: 0,
    justifyContent: 'flex-start',
  },
  header: {
    backgroundColor: '#b7d1b7',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginBottom: 32,
  },
  menuButton: {
    fontSize: 22,
    color: '#222',
  },
  nomeListaInput: {
    backgroundColor: 'transparent',
    borderBottomWidth: 1,
    borderColor: '#7cb77c',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
    width: 140,
    color: '#222',
    paddingVertical: 2,
  },
  form: {
    flex: 1,
    alignItems: 'center',
    gap: 12,
  },
  label: {
    alignSelf: 'flex-start',
    marginLeft: 40,
    marginBottom: 2,
    color: '#222',
    fontWeight: 'bold',
  },
  input: {
    width: 240,
    padding: 8,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#fff',
    marginBottom: 8,
  },
  quantidadeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 16,
  },
  menos: {
    backgroundColor: '#e57373',
    borderRadius: 4,
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  menosText: {
    fontSize: 28,
    color: '#222',
  },
  mais: {
    backgroundColor: '#7cb77c',
    borderRadius: 4,
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  maisText: {
    fontSize: 28,
    color: '#222',
  },
  qtd: {
    width: 32,
    textAlign: 'center',
    fontSize: 18,
    color: '#222',
  },
  cadastrar: {
    marginTop: 24,
    backgroundColor: '#7cb77c',
    borderRadius: 4,
    paddingVertical: 12,
    width: 240,
    alignItems: 'center',
  },
  buttonText: {
    color: '#222',
    fontSize: 18,
    fontWeight: 'bold',
  },
};