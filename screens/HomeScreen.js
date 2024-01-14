import {
  SpaceMono_400Regular,
  SpaceMono_400Regular_Italic,
  SpaceMono_700Bold,
  SpaceMono_700Bold_Italic,
  useFonts,
} from '@expo-google-fonts/space-mono';
import React, { useContext, useEffect, useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import PlantsContext from "../context/PlantsContext";

const HomeScreen = ({ navigation }) => {
  const { plants, addPlant, removePlant } = useContext(PlantsContext)
  const numPlants = plants.length + 1;

  const [ floraTitle, setFloraTitle ] = useState("")

  useEffect(() => {
    if(numPlants == 1){
      setFloraTitle("Novice")
    } else if (numPlants <= 10){
      setFloraTitle("Beginner")
    } else if (numPlants <= 20){
      setFloraTitle("Experienced")
    } else if (numPlants <= 45){
      setFloraTitle("Advanced")
    } else {
      setFloraTitle("Master")
    }
  }, [])

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
      <Text>You are a Level {numPlants} Flora Friend!</Text>
      <Text>You are a {floraTitle}!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#CDEAC0",
  },
  heading: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    fontFamily:'SpaceMono_700Bold',
  },
  subHeading: {
    fontSize: 16,
    marginBottom: 20,
  },
});

export default HomeScreen;
