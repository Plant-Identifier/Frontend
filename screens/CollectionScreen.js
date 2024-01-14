import React, { useState } from 'react';
import { ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import Plant from '../components/Plant';
import Slideup from '../components/Slideup';
import { IMAGES } from '../constants/images';

const CollectionScreen = () => {
  const [touched, setTouched] = useState(false);

  const handlePress = () => {
    setTouched(!touched);
  };

  const styles = StyleSheet.create({
    contentContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between', // Adjust as needed
      alignItems: 'flex-start',
      flexWrap: 'wrap',
      padding: 10, // Add padding to give some space between plants
    },
  });

  return (
    <ScrollView
      contentContainerStyle={styles.contentContainer}
      bouncesZoom={false}
      directionalLockEnabled={true}
    >
      {Object.keys(IMAGES).map((key) => (
        <TouchableOpacity key={key} onPress={() => handlePress(touched)}>
          <Plant imgSrc={IMAGES[key]} name={key} />
        </TouchableOpacity>
      ))}
      <Slideup clicked={touched} setClicked={setTouched} />
    </ScrollView>
  );
};

export default CollectionScreen;
