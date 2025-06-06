import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';

export default function LoginScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Esmeralda</Text>
      <Image source={require('../assets/icon.png')} style={styles.logo} />
      <TextInput style={styles.input} placeholder="Email" />
      <TextInput style={styles.input} placeholder="Senha" secureTextEntry />
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>

      {/* 🔧 Aqui está a navegação certa */}
      <TouchableOpacity onPress={() => navigation.navigate('Cadastro')}>
        <Text style={styles.link}>Quero me cadastrar!</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d7ded7',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  },
  title: {
    backgroundColor: '#b7e3c3',
    width: '100%',
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    paddingVertical: 10,
    marginBottom: 30
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 30,
    resizeMode: 'contain'
  },
  input: {
    width: '100%',
    height: 40,
    backgroundColor: '#fff',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 15,
    elevation: 2
  },
  button: {
    backgroundColor: '#7aa587',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 5,
    marginBottom: 15
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold'
  },
  link: {
    color: '#333',
    textDecorationLine: 'underline'
  }
});
