import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigation from './src/navigations/TabNavigation';
import DrawerBStack from './src/navigations/DrawerBStack';

const Drawer = createDrawerNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={TabNavigation} />
        <Drawer.Screen name="Drawer B" component={DrawerBStack} />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}