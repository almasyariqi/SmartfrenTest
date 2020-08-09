import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

export default class MessageScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <ScrollView
        contentContainerStyle={{ padding: 10 }}
      >
        <View style={styles.Container}>
          <Text style={{ marginBottom: 15, fontWeight: 'bold', fontSize: 15 }}> Dear Smartfren Team, </Text>
          <Text style={{ flexWrap: 'wrap', fontSize: 15, marginBottom: 10 }}>
            First of all, I wanna say sorry that I couldn't finish the test.
            As I mention before the interview few days ago,
            I have a problem or kinda accident that gave me some kinda Injury.
            During the test time, which is few days ago untill I made this simple app,
            I have to go back to the hospital few times to do the treatment and some kinda recovery.
            So, that's why I couldn't finish the test.
            </Text>
          <Text style={{ flexWrap: 'wrap', fontSize: 15, marginBottom: 10 }}>
            I am not trying to make an excuse so that I can have some additional times or something like that,
            because I already made the same excuse before the Interview, and I don't like to make the same excuse.I just want to let the team know.
            </Text>
          <Text style={{ flexWrap: 'wrap', fontSize: 15, marginBottom: 10 }}>
            I am also not hoping for anything becuase I know this app just too far away from the test requirements.
            I just want to submit this, so at least I am not look like someone who's running away from the test hehe.
            </Text>
          <Text style={{ flexWrap: 'wrap', fontSize: 15, marginBottom: 15 }}>
            I would like to say thank you very much for the opportunity and goodluck for your team.
            </Text>
          <Text style={{ fontSize: 15, fontWeight: 'bold' }}> Regards, </Text>
          <Text style={{ fontSize: 15, fontWeight: 'bold' }}>Muhamad Riadi Almasyariqi</Text>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  Container: {
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 5,
    borderWidth: 2,
    borderColor: 'tomato'
  }
})
