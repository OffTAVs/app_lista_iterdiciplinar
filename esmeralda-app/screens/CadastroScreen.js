import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';

export default function CadastroScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Nome do Aplicativo</Text>
      <Image source={require('../assets/icon.png')} style={styles.logo} />
      <TextInput style={styles.input} placeholder="Email" />
      <TextInput style={styles.input} placeholder="Senha" secureTextEntry />
      <TextInput style={styles.input} placeholder="Confirmar senha" secureTextEntry />
      <TextInput style={styles.input} placeholder="Nome" />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Cadastrar</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={styles.link}>Já tenho cadastro!</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eaeaea',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  },
  title: {
    backgroundColor: '#b7e3c3',
    width: '100%',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    paddingVertical: 10,
    marginBottom: 20
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 30,
    resizeMode: 'contain'
  },
 input: {
  width: '100%',
  maxWidth: 400, // impede que fique largo demais em telas grandes
  height: 40,
  backgroundColor: '#fff',
  borderRadius: 5,
  paddingHorizontal: 10,
  marginBottom: 15,
  elevation: 2
},

  button: {
    backgroundColor: '#b7e3c3',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 5,
    marginTop: 10
  },
  buttonText: {
    color: '#000',
    fontWeight: 'bold'
  },
  link: {
    color: '#333',
    textDecorationLine: 'underline',
    marginTop: 15
  }
});
