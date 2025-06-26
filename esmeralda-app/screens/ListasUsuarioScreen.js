import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Pressable } from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import Checkbox from 'expo-checkbox';
import { obterListas } from "../axios/axios"

export default function ListasUsuarioScreen({ navigation }) {
   const [listas, setListas] = useState([]);

   React.useEffect(() => {
    obterListas().then((data) => setListas(data.data)).catch(erro => alert(erro.response.data));
   }, [])

  const toggleCheck = (id) => {
  };

  const renderItem = ({ item, index }) => (
    <View style={styles.itemCard}>
      <View style={styles.itemContent}>
        <Text style={styles.itemName}>{item.Nome}</Text>
        <MaterialIcons onPress={() => navigation.navigate("Lista", {
          itemId: item.Id
        })} size={20} name="visibility" />
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Topo */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Ionicons name="menu" size={28} color="black" style={{ marginRight: 8 }} />
        </TouchableOpacity>
        <Text style={styles.headerText}>Nome do Aplicativo</Text>
      </View>

      {/* Título */}
      <Text style={styles.listTitle}>Listas</Text>
      <View style={styles.line} />

      {/* Lista */}
      <FlatList
        data={listas}
        keyExtractor={item => item.Id}
        renderItem={renderItem}
        contentContainerStyle={styles.listContainer}
      />
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
    justifyContent: 'space-between',
    alignItems: 'center',
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
    alignItems: 'center'
  },
  itemContent: {
    flexDirection: 'row',
    alignItems: "center"
  },
  itemName: {
    fontWeight: 'bold',
    fontSize: 14,
    color: "black",
    marginRight: 10
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});