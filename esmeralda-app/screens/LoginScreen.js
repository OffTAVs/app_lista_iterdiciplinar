import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, StatusBar } from 'react-native';
import { logar } from "../axios/axios"

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = React.useState("");
  const [senha, setSenha] = React.useState("");

  const onSubmit = () => {
    logar({
      email, senha
    })
    .then(() => navigation.navigate("Home"))
    .catch(erro => alert(erro.response.data))
  }

  return (
    <View style={styles.container}>
      <View style={styles.topo}></View>
      <Text style={styles.title}>Esmeralda</Text>
      <Image source={require('../assets/logo.png')} style={styles.logo} />
      <TextInput value={email} onChangeText={setEmail} style={styles.input} placeholder="Email" />
      <TextInput value={senha} onChangeText={setSenha}  style={styles.input} placeholder="Senha" secureTextEntry />
      <TouchableOpacity style={styles.button} onPress={onSubmit}>
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
    gap:15,
  },
  title: {
    backgroundColor: '#b7e3c3',
    width: '100%',
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    paddingVertical: 10,
    marginBottom: 30,
    position: 'absolute',
    top:0,
    paddingTop: 40,
  },
  logo: {
    width: 140,
    height: 140,
    marginBottom: 30,
    resizeMode: 'contain'
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
    fontSize:20,
  },
  link: {
    color: '#333',
    textDecorationLine: 'underline',
    fontSize:20,
  }
});
