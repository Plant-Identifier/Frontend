// src/components/HomeScreen.js
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Welcome to Your Trip Planner!</Text>
      <Image
        source={{ uri: 'https://example.com/your-image.jpg' }}
        style={styles.image}
      />
      <Text style={styles.text}>
        Plan your trip with ease using our app. Explore restaurants, attractions,
        and find the perfect places to stay.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 20,
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
  },
});

export default HomeScreen;
