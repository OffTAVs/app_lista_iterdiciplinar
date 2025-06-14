import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Checkbox from 'expo-checkbox';
 
export default function ShoppingListScreen( {navigation}) {
  const [items, setItems] = useState([
    { id: '1', name: 'Banana', price: 'R$4,50', quantity: 5, checked: true },
    { id: '2', name: 'Nome do produto', price: 'preço', quantity: 'quantidade', checked: true },
    { id: '3', name: 'Nome do produto', price: 'preço', quantity: 'quantidade', checked: true },
    { id: '1', name: 'Banana', price: 'R$4,50', quantity: 5, checked: true },
    { id: '2', name: 'Nome do produto', price: 'preço', quantity: 'quantidade', checked: true },
    { id: '3', name: 'Nome do produto', price: 'preço', quantity: 'quantidade', checked: true },
    { id: '1', name: 'Banana', price: 'R$4,50', quantity: 5, checked: true },
    { id: '2', name: 'Nome do produto', price: 'preço', quantity: 'quantidade', checked: true },
    { id: '3', name: 'Nome do produto', price: 'preço', quantity: 'quantidade', checked: true },
  ]);
 
  const toggleCheck = (id) => {
    setItems(items.map(item =>
      item.id === id ? { ...item, checked: !item.checked } : item
    ));
  };
 
  const renderItem = ({ item, index }) => (
    <View style={[styles.itemCard, { backgroundColor: index === 0 ? '#ddebf2' : '#dadada' }]}>
      <View style={styles.itemContent}>
        <Text style={styles.itemName}>{item.name}</Text>
        <Text style={styles.itemDetails}>{item.price}</Text>
        <Text style={styles.itemDetails}>Quantidade: {item.quantity}</Text>
      </View>
      <Checkbox
        value={item.checked}
        onValueChange={() => toggleCheck(item.id)}
        color={item.checked ? '#7A40DB' : undefined}
      />
    </View>
  );
 
  return (
    <View style={styles.container}>
      {/* Topo */}
      <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.openDrawer()}>
                  <Ionicons name="menu" size={28} color="black" style={{ marginRight: 90 }} />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Esmeralda</Text>
              </View>
 
      {/* Título */}
      <Text style={styles.listTitle}>Lista de Compra</Text>
      <View style={styles.line} />
 
      {/* Lista */}
      <FlatList
        data={items}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.listContainer}
      />
 
      {/* Add Item */}
      <TouchableOpacity style={styles.addItemButton} onPress={() => navigation.navigate('CadastroItem')}>
        <Text style={styles.addItemText}>Add new Item</Text>
        <Ionicons name="add" size={20} />
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  },
  header: {
    backgroundColor: '#b9e3c6',
    paddingVertical: 15,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 40,
  },
  headerTitle: {
    fontWeight: 'bold',
    fontSize: 30,
    textDecorationLine: 'underline',
    
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
    paddingButton:30,
  },
});