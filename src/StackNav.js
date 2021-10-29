import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Menu from './pages/Menu';
import Sobre from './menuPages/Sobre';
import Contato from './menuPages/Contato';
import Login from './menuPages/Login';

const Stack = createStackNavigator();

export default function StackNav() {
  return (
    <Stack.Navigator 
    /*screenOptions={{
        headerStyle: { backgroundColor: '#505' },
        headerTintColor: '#FF0',
    }}*/ >
      <Stack.Screen name='Menu' component={Menu} options = {{headerShown: false }}/>
      <Stack.Screen name='Sobre' component={Sobre} options = {{title: 'Sobre'}}/>
      <Stack.Screen name='Contato' component={Contato} options = {{title: 'Contato'}}/>
      <Stack.Screen name='Login' component={Login} options = {{title: 'Login'}}/>
    </Stack.Navigator>
  )
}