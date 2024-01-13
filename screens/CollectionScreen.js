import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import Plant from "../components/Plant";
import { IMAGES } from '../constants/images';

const CollectionScreen = () => {
  const styles = StyleSheet.create({contentContainer: {
    height: 3050,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start',
    width: 380,
    flexWrap: 'wrap',}})

  return (
    <ScrollView
    contentContainerStyle = {styles.contentContainer}
    bouncesZoom = {false}
    directionalLockEnabled = {true}>
        {Object.keys(IMAGES).map((key) => (
          <Plant
          imgSrc = {IMAGES[key]}
          name = {key}/>
        ))}
    </ScrollView>
  );
};

export default CollectionScreen;