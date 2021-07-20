import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import MainScreen from './src/pages/main';
import SettingsScreen from './src/pages/settings';
import ManualScreen from './src/pages/manual';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Settings" component={SettingsScreen} />
        <Tab.Screen name="MainScreen" component={MainScreen} />
        <Tab.Screen name="Manual" component={ManualScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}