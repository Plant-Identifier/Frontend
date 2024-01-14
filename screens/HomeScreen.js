import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Welcome to Your Home</Text>
      <Text style={styles.subHeading}>Enjoy the Green Experience!</Text>
      <Image
        source = {require("../plant-images/FloraFriend.png")}
        style = {{
          width: 180,
          height: 180,
          borderRadius: 100,
          marginBottom: 20
        }}
      ></Image>
      <Text>You are a Level 1 Flora Friend!</Text>
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
