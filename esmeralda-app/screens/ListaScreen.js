import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Pressable } from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import Checkbox from 'expo-checkbox';
import { deletarProduto, obterLista, obterProdutos } from "../axios/axios";

export default function ShoppingListScreen({ navigation, route }) {
  const { itemId } = route.params;

  const [produtos, setProdutos] = useState([])
  const [lista, setLista] = useState();

  const obterDados = () => {
    if (itemId) {
      obterProdutos(itemId).then(data => setProdutos(data.data)).catch(erro => alert(erro.response.data))
      obterLista(itemId).then(data => setLista(data.data)).catch(erro => alert(erro.response.data))
    }
  }

  React.useEffect(() => {
    obterDados()
  }, [itemId])

  const deletar = (id) => {
    deletarProduto(id).then(() => obterDados()).catch(erro => alert(erro.response.data));
  }

  const renderItem = ({ item, index }) => (
    <View style={[styles.itemCard, { backgroundColor: index % 2 === 0 ? '#ddebf2' : '#dadada' }]}>
      <View style={styles.itemContent}>
        <Text style={styles.itemName}>{item.Nome}</Text>
        <Text style={styles.itemDetails}>{item.Descricao}</Text>
        <Text style={styles.itemDetails}>Preço: {item.Preco}</Text>
        <Text style={styles.itemDetails}>Quantidade: {item.Quantidade}</Text>
      </View>
      {/* <Checkbox
        value={item.checked}
        onValueChange={() => toggleCheck(item.id)}
        color={item.checked ? '#7A40DB' : undefined}
      /> */}
      <MaterialIcons name="delete" color="red" size={30} onPress={() => deletar(item.Id)} />
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Topo */}
      <View style={styles.header}>
        <MaterialIcons name="arrow-back" size={30} onPress={() => navigation.navigate("Listas")} />
        <Text style={styles.headerTitle}>Esmeralda</Text>
      </View>
      {/* Título */}
      {lista && <Text style={styles.listTitle}>{lista.Nome}</Text>}
      <View style={styles.line} />

      {/* Lista */}
      <FlatList
        data={produtos}
        keyExtractor={item => item.Id}
        renderItem={renderItem}
        contentContainerStyle={styles.listContainer}
      />

      {/* Add Item */}
      <TouchableOpacity style={styles.addItemButton} onPress={() => navigation.navigate('CadastroItem', {
        itemId: itemId
      })}>
        <Text style={styles.addItemText}>Adicionar novo item</Text>
        <Ionicons name="add" size={20} />
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  }, header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#b2e6d4',
    padding: 15,
    width: '100%',
    borderWidth: 0,
    marginBottom: 32,
    backgroundColor: '#b7e3c3',
    paddingTop: 40,
  },
  headerTitle: {
    fontWeight: 'bold',
    fontSize: 30,
  },
  listTitle: {
    marginTop: 20,
    marginLeft: 20,
    fontSize: 16,
  },
  line: {
    height: 1,
    backgroundColor: '#666',
    marginHorizontal: 20,
    marginTop: 4,
  },
  listContainer: {
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  itemCard: {
    padding: 15,
    borderRadius: 10,
    marginBottom: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  itemContent: {
    flexDirection: 'column',
    gap: 2,
  },
  itemName: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  itemDetails: {
    fontSize: 13,
  },
  addItemButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    paddingVertical: 20,
    gap: 5,
  },
  addItemText: {
    fontSize: 18,
    paddingButton: 30,
  },
  headerText: {
    widht: 1000,
    alignItems: 'center',
    fontSize: 30,
    fontWeight: 'bold',

  },
}); 