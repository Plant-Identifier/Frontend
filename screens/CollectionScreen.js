import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import Plant from '../components/Plant';
import Slideup from '../components/Slideup';
import { IMAGES } from '../constants/images';

const CollectionScreen = () => {
  useEffect(() => {
    fetchData();
  }, [])

  async function fetchData(){
    try{
      const res = await fetch("https://2ae1-129-100-255-34.ngrok-free.app/getInfo?Type=Sunflower")
      .then(res => {res.json()})
      .then(data => {
        console.log(data)
      })
    } catch (error){
      console.log("error")
    }
  }

  const [touched, setTouched] = useState(false);

  const handlePress = () => {
    setTouched(!touched);
  };

  const styles = StyleSheet.create({
    contentContainer: {
      flexDirection: 'row',
      justifyContent: 'center', // Adjust as needed
      alignItems: 'center',
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
