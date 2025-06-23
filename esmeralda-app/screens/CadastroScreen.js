import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { cadastrar } from "../axios/axios"

export default function CadastroScreen({ navigation }) {
  const [email, setEmail] = React.useState("");
  const [senha, setSenha] = React.useState("");
  const [confirmarSenha, setConfirmarSenha] = React.useState("");
  const [nome, setNome] = React.useState("");

  const [loading, setLoading] = React.useState(false);

  const onSubmit = () => {
    if (senha !== confirmarSenha) {
      alert("As senhas não coincidem")
    } else {
      if (!loading) {
        setLoading(true);
        cadastrar({
          email, senha, nome
        })
        .then(() => navigation.navigate('Cadastro'))
        .catch(erro => alert(erro.response.data))
        .finally(() => setLoading(false))
      }
    }
  }
  
  return (
    
    <View style={styles.container}>
      <Text style={styles.title}>Esmeralda</Text>
      <Image source={require('../assets/logo.png')} style={styles.logo} />
      <TextInput value={email} onChangeText={setEmail} style={styles.input} placeholder="Email" />
      <TextInput value={senha} onChangeText={setSenha} style={styles.input} placeholder="Senha" secureTextEntry />
      <TextInput value={confirmarSenha} onChangeText={setConfirmarSenha} style={styles.input} placeholder="Confirmar senha" secureTextEntry />
      <TextInput value={nome} onChangeText={setNome} style={styles.input} placeholder="Nome" />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText} onPress={onSubmit}>Cadastrar</Text>
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
  },
});
