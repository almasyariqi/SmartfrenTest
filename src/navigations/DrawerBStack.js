import React, { Component } from 'react';
import { createStackNavigator} from '@react-navigation/stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import DrawerBScreen from '../screen/DrawerBScreen';

const Stack = createStackNavigator();

export default class DrawerBStack extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Stack.Navigator>
        <Stack.Screen 
          name="Drawer B" 
          component={DrawerBScreen} 
          options={{
            headerLeft: () => (
              <TouchableOpacity style={{ marginLeft: 10 }} onPress={() => this.props.navigation.openDrawer()}>
                <Ionicons name='menu' size={30}/>
              </TouchableOpacity>
            ),
          }}
          />
      </Stack.Navigator>
    );
  }
}
