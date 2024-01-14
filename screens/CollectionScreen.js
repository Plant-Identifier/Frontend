import React, { useContext, useState } from 'react';
import { ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import Plant from '../components/Plant';
import Slideup from '../components/Slideup';
import { IMAGES } from '../constants/images';
import PlantsContext from "../context/PlantsContext";

const CollectionScreen = () => {
  const { plants, addPlant, removePlant } = useContext(PlantsContext)

  async function fetchData(plant){
    try{
      const response = await fetch(`https://6f89-2605-8d80-682-2c53-649e-56fd-73f5-9971.ngrok-free.app/getInfo?Type=${plant}`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const text = await response.text(); // Get the response as text
      console.log(text); // Log the raw text to see what's being returned

      const data = text.match(/\(([^)]+)\)/)[1].split(' - '); // This is a very fragile approach
      const name = data[0];
      const description = data[1];

      setDesc(description);
    } catch (error){
      console.log("error", error)
    }
  }

  const [desc, setDesc] = useState("")
  const [touched, setTouched] = useState(false);

  const handlePress = (plantName) => {
    console.log(plantName)
    console.log(plants)
    const search = plantName.split(/(?=[A-Z])/).join('%20');
    fetchData(search)
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
        <TouchableOpacity key={key} onPress={() => handlePress(key)}>
          <Plant imgSrc={IMAGES[key]} name={key} />
        </TouchableOpacity>
      ))}
      <Slideup 
        clicked={touched}
        setClicked={setTouched}
        description={desc}/>
    </ScrollView>
  );
};

export default CollectionScreen;
