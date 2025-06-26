import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Pressable } from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import Checkbox from 'expo-checkbox';
import { deletarLista, obterListas } from "../axios/axios"

export default function ListasUsuarioScreen({ navigation }) {
  const [listas, setListas] = useState([]);

  React.useEffect(() => {
    obterListas().then((data) => setListas(data.data)).catch(erro => alert(erro.response.data));
  }, [])

  const renderItem = ({ item, index }) => (
    <View style={styles.itemCard}>
      <View style={styles.itemContent}>
        <Text style={styles.itemName}>{item.Nome}</Text>
        <MaterialIcons onPress={() => navigation.navigate("Lista", {
          itemId: item.Id
        })} size={20} name="visibility" />
        <MaterialIcons style={{ marginLeft: 15 }} onPress={() => deletarLista(item.Id).then(() => obterListas()
          .then((data) => setListas(data.data)).catch(erro => alert(erro.response.data)))
          .catch(erro => alert(erro.response.data))} color="red" size={20} name="delete" />
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Topo */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Ionicons name="menu" size={28} color="black" style={{ marginRight: 90 }} />
        </TouchableOpacity>
        <Text style={styles.headerText}>Esmeralda</Text>
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
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#b2e6d4',
    padding: 15,
    width: '100%',
    borderWidth: 0,
    marginBottom: 32,
    backgroundColor: '#b7e3c3',
    paddingTop:40,
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
    widht:1000,
    alignItems: 'center',
    fontSize: 30,
    fontWeight: 'bold',

  },
});