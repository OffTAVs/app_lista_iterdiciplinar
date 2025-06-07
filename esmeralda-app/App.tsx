import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import LoginScreen from './screens/LoginScreen';
import CadastroScreen from './screens/CadastroScreen';
import HomeScreen from './screens/HomeScreen';
import ListaScreen from './screens/ListaScreen'

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerRoutes() {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        drawerStyle: {
          backgroundColor: '#b2e6d4', // Cor de fundo do menu
          width: 220,
        },
        drawerActiveTintColor: '#5B136D', // Cor do texto ativo
        drawerInactiveTintColor: '#333',  // Cor do texto inativo
        drawerLabelStyle: {
          fontSize: 18,
        },
      }}
    >
      <Drawer.Screen name="Home" component={HomeScreen} />
      {/* Outras telas */}
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Cadastro" component={CadastroScreen} />
        <Stack.Screen name="Home" component={DrawerRoutes} />
        <Stack.Screen name="Lista" component={ListaScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}