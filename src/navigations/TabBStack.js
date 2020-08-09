import React, { Component } from 'react';
import { createStackNavigator} from '@react-navigation/stack';
import JustTabBScreen from '../screen/JustTabBScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Stack = createStackNavigator();

export default class TabBStack extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Stack.Navigator>
        <Stack.Screen 
          name="Just Tab B" 
          component={JustTabBScreen} 
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
