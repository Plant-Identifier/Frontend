import React from 'react';
import { View } from 'react-native';
import Plant from "../components/Plant";

const CollectionScreen = () => {
  return (
    <View
    style = {
      { flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-start',
        width: 400,
        flexWrap: 'wrap',}
    }>
      <Plant
      imgSrc = {require("../plant-images/Alfala.png")}
      name = "test"/>
      <Plant
      imgSrc = {require("../plant-images/Alfala.png")}
      name = "test"/>
      <Plant
      imgSrc = {require("../plant-images/Alfala.png")}
      name = "test"/>
      <Plant
      imgSrc = {require("../plant-images/Alfala.png")}
      name = "test"/>
      <Plant
      imgSrc = {require("../plant-images/Alfala.png")}
      name = "test"/>
      <Plant
      imgSrc = {require("../plant-images/Alfala.png")}
      name = "test"/>
      <Plant
      imgSrc = {require("../plant-images/Alfala.png")}
      name = "test"/>
      <Plant
      imgSrc = {require("../plant-images/Alfala.png")}
      name = "test"/>
    </View>
  );
};

export default CollectionScreen;