import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './components/HomeScreen';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Plant Indentifier</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "E3F6E1",
    alighments:'center',
    justifyContent:'center',
  },
})