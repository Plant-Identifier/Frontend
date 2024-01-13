import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Welcome to Your Home</Text>
      <Text style={styles.subHeading}>Enjoy the Green Experience!</Text>
      <Button
        title="Explore More"
        onPress={() => {
          // Navigate to other screens or perform actions
          // For simplicity, we're using a button to simulate navigation
          alert("Button Pressed!");
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  subHeading: {
    fontSize: 18,
    color: "#888888",
    marginBottom: 20,
  },
});

export default HomeScreen;
