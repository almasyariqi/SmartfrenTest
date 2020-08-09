
import React, { Component } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeStack from './HomeStack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import TabBStack from './TabBStack';

const Tab = createBottomTabNavigator();

export default class TabNavigation extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'Home') {
              iconName = focused
                ? 'home'
                : 'home-outline';
            } else if (route.name === 'JustTabB') {
              iconName = focused
                ? 'bookmarks'
                : 'bookmarks-outline';
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'dodgerblue',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="Home" component={HomeStack} />
        <Tab.Screen name="JustTabB" component={TabBStack} />
      </Tab.Navigator>
    );
  }
}
