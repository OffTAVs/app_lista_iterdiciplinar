import React from 'react';
import { View, Text, TextInput, StyleSheet, SafeAreaView, TouchableOpacity, Modal } from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { adicionarLista } from "../axios/axios"

export default function HomeScreen({ navigation }) {

  const [modalOpen, setModalOpen] = React.useState(false);

  const [nome, setNome] = React.useState("");

  const listaAdd = () => {
    adicionarLista({
      nome
    })
    .then(() => navigation.navigate("Listas"))
    .catch(erro => alert(erro.response.data))
  }

  return (
    <>
    <View style={styles.container}>
      {/* Conteúdo principal */}
      <View style={styles.mainContent}>
        {/* Cabeçalho */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <Ionicons name="menu" size={28} color="black" style={{ marginRight: 90 }} />
          </TouchableOpacity>
          <Text style={styles.headerText}>Esmeralda</Text>
        </View>

          {/* Botões centrais */}
          <View style={styles.centerContent}>
            <TouchableOpacity style={styles.actionButton} onPress={() => setModalOpen(true)}>
              <MaterialIcons name="note-add" size={48} color="black" />
              <Text style={styles.buttonText}>Crie uma lista</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <Modal animationType="slide" onRequestClose={() => setModalOpen(false)} visible={modalOpen}>
        <View>
          <View style={styles.modalHeader}>
            <Text style={styles.modalTitulo}>Adicionar uma lista</Text>
            <MaterialIcons name="close" size={30} color="black" onPress={() => setModalOpen(false)} />
          </View>
          <View style={{ marginTop: 10, alignItems: "center" }}>
            <TextInput value={nome} onChangeText={setNome} style={styles.input} placeholder="Nome da lista" />
            <TouchableOpacity style={styles.button} onPress={listaAdd}>
              <Text style={styles.buttonText}>Adicionar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  modalHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#b9e3c6",
    padding: 10
  },
  button: {
    backgroundColor: '#7aa587',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 5,
    marginBottom: 15,

  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20,
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    width: '80%',
    paddingHorizontal: 10,
    marginBottom: 15,
    elevation: 2,
    fontSize: 20,
  },
  modalTitulo: {
    fontSize: 20
  },
  container: {
    flex: 1,
    backgroundColor: '#ededed',
  },
  mainContent: {
    flex: 1,
    padding: 0,
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
  headerText: {
    widht:1000,
    alignItems: 'center',
    fontSize: 30,
    fontWeight: 'bold',

  },
  centerContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  actionButton: {
    alignItems: 'center',
    marginVertical: 20,
  },
  buttonText: {
    marginTop: 8,
    fontSize: 16,
  },
});