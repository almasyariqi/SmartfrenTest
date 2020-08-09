import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class DrawerBScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Drawer B Screen</Text>
      </View>
    );
  }
}
