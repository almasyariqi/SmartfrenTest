import React, { Component } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screen/HomeScreen';
import MessageScreen from '../screen/MessageScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Stack = createStackNavigator();

export default class HomeStack extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerLeft: () => (
              <TouchableOpacity style={{ marginLeft: 10 }} onPress={() => this.props.navigation.openDrawer()}>
                <Ionicons name='menu' size={30}/>
              </TouchableOpacity>
            ),
          }}
        />
        <Stack.Screen name="Message" component={MessageScreen} />
      </Stack.Navigator>
    );
  }
}
