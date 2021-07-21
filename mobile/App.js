import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome5, MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';

import MainScreen from './src/pages/main';
import Settings from './src/pages/settings';
import ManualScreen from './src/pages/manual';
import LoginScreen from './src/pages/login'

const Tab = createBottomTabNavigator();

function SettingsScreen () {
  return (
    <Tab.Navigator>
      <Tab.Screen 
        name="Connection"
        component={Settings}
        options={{
          tabBarVisible: false
        }} 
      />
      <Tab.Screen 
        name="Login"
        component={LoginScreen}
        options={{
          tabBarVisible: false
        }} 
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (

    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen 
          name="Settings" 
          component={SettingsScreen} 
          options={{
            tabBarIcon: ({color}) => (
              <MaterialCommunityIcons name="hammer-wrench" size={32} color="black" />
            ),
          }}
          />
        <Tab.Screen 
          name="MainScreen" 
          component={MainScreen} 
          options={{
            tabBarIcon: ({color}) => (
              <FontAwesome5 name="warehouse" size={24} color="black" />
            ),
          }}
          />
        <Tab.Screen 
          name="Manual" 
          component={ManualScreen} 
          options={{
            tabBarIcon: ({color}) => (
              <MaterialIcons name="engineering" size={24} color="black" />
            ),
          }}
          />
      </Tab.Navigator>
    </NavigationContainer>
  );
}