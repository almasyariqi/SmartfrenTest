import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ marginBottom: 10 }}>
          Please Click This!
      </Text>
        <Button
          onPress={() => this.props.navigation.navigate('Message')}
          title="Click Me"
        />
      </View>
    );
  }
}
