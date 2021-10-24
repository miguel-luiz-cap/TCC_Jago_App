import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';

import Artista from './RotasButton';
import Musica from './RotasButtonMusica';//from './pages/Musica';
import Home from './pages/Home';

const Tab = createBottomTabNavigator();


export default function Rotas() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: '#000',
        tabBarInactiveTintColor: '#FFFF00',
        tabBarActiveBackgroundColor: '#F0F',
        "tabBarStyle": [
          {
            "display": "flex",
            backgroundColor: '#000'
          },
          null
        ],
        headerStyle: { backgroundColor: '#000', height: 80},
        headerTintColor: '#FF0',
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          
          tabBarLabel: 'Início',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Artistas-tab"
        component={Artista}
        options={{
          tabBarLabel: 'Artistas',
          title: 'Artistas',
          showTitle: false,

          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="account-music"
              color={color}
              size={size}
            />
          ),
        }}
      />
     
      <Tab.Screen
        name="Musica-tab"
        component={Musica}
        options={{
          tabBarLabel: 'Música',
          title: 'Música',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="music"
              color={color}
              size={size}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
