import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import {
    SpaceMono_400Regular,
    SpaceMono_400Regular_Italic,
    SpaceMono_700Bold,
    SpaceMono_700Bold_Italic,
    useFonts,
  } from '@expo-google-fonts/space-mono';


const HomeScreen = ({ navigation }) => {

    const [fontsLoaded] = useFonts({
        SpaceMono_400Regular,
        SpaceMono_400Regular_Italic,
        SpaceMono_700Bold,
        SpaceMono_700Bold_Italic,
      });
    
      if (!fontsLoaded) return  <Text style={styles.welcomeText}>Welcome to WhatTheFlora!</Text>
  
      return (
    <View style={styles.container}>
      <Text style={styles.heading}>Welcome to Your Home</Text>
      <Text style={styles.subHeading}>Enjoy the Green Experience!</Text>
      <Image
        source = {require("../assets/FloraFriend.png")}
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
    backgroundColor: "#E3F6E1",
  },
  heading: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 10,
    fontFamily:'SpaceMono_700Bold',
  },
  subHeading: {
    fontSize: 18,
    color: "#888888",
    marginBottom: 20,
    fontFamily: 'SpaceMono_700Bold_Italic',
  },
});

export default HomeScreen;
