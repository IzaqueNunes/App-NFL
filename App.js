import 'react-native-gesture-handler';
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

//IMPORTANDO A NAVEGAÇÃO
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import Home from './src/pages/home';
import Contato from './src/pages/contato';
import Cadastro from './src/pages/cadastro';
import Produtos from './src/pages/produtos';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function Tabs(){
  return(
    <Tab.Navigator>
      <Tab.Screen name="Jogos " component={Produtos}/>
      <Tab.Screen name="Contato" component={Contato}/>
    </Tab.Navigator>
  )
}

export default function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen style={styles.header}
          name="Home"
          component={Home}
          options={{
            headerShown:false,
            headerStyle: {
              backgroundColor: '#36063B'
            },
            headerTintColor: '#FFF'
          }}
        />


        <Stack.Screen options={{headerShown:false, title:"Jogos"}}  name="Produtos" component={Tabs}/>
        <Stack.Screen options={{headerShown:false}}name="Cadastro" component={Cadastro}/>
      </Stack.Navigator>
      
    </NavigationContainer>
  );
  
}

const styles = StyleSheet.create({
  header:{
    alignItems: 'center',
    backgroundColor: '#FFF'
  }

});