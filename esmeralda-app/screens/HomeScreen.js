import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Conteúdo principal */}
      <View style={styles.mainContent}>
        {/* Cabeçalho */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <Ionicons name="menu" size={28} color="black" style={{ marginRight: 8 }} />
          </TouchableOpacity>
          <Text style={styles.headerText}>Nome do Aplicativo</Text>
        </View>

        {/* Botões centrais */}
        <View style={styles.centerContent}>
          <TouchableOpacity style={styles.actionButton} onPress={() => navigation.navigate('Lista')}>
            <MaterialIcons name="note-add" size={48} color="black" />
            <Text style={styles.buttonText}>Crie uma lista</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton}>
            <MaterialIcons name="create-new-folder" size={48} color="black" />
            <Text style={styles.buttonText}>Crie uma pasta</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ededed',
  },
  mainContent: {
    flex: 1,
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#b2e6d4',
    padding: 10,
    borderWidth: 2,
    borderColor: '#b2e6d4',
    borderRadius: 4,
    marginBottom: 32,
  },
  headerText: {
    fontSize: 18,
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