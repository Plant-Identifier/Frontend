import React, { useContext, useState } from 'react';
import { ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import Plant from '../components/Plant';
import Slideup from '../components/Slideup';
import { IMAGES } from '../constants/images';
import PlantsContext from '../context/PlantsContext';

const CollectionScreen = () => {
  const { plants, addPlant, removePlant } = useContext(PlantsContext);

  async function fetchData(plant) {
    try {
      const response = await fetch(
        `https://6f89-2605-8d80-682-2c53-649e-56fd-73f5-9971.ngrok-free.app/getInfo?Type=${plant}`
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const text = await response.text();
      const data = text.match(/\(([^)]+)\)/)[1].split(' - ');
      const name = data[0];
      const description = data[1];

      setDesc(description);
    } catch (error) {
      console.log('error', error);
    }
  }

  const [desc, setDesc] = useState('');
  const [touched, setTouched] = useState(false);

  const handlePress = (plantName) => {
    console.log(plants)
    const search = plantName.split(/(?=[A-Z])/).join('%20');
    fetchData(search);
    setTouched(!touched);
  };

  const styles = StyleSheet.create({
    contentContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      flexWrap: 'wrap',
      padding: 10,
    },
    scrollView: {
      backgroundColor: '#E3F6E1', // Light green background color
    },
    descriptionText: {
      fontSize: 18, // Adjust the font size
      padding: 10, // Add padding for better formatting
    },
  });

  return (
    <ScrollView
      style={styles.scrollView}
      contentContainerStyle={styles.contentContainer}
      bouncesZoom={false}
      directionalLockEnabled={true}
      contentOffset={{ x: 0, y: 0 }} // Ensure scroll starts at the top
    >
      {Object.keys(IMAGES).map((key) => (
        <TouchableOpacity key={key} onPress={() => handlePress(key)}>
          <Plant imgSrc={IMAGES[key]} name={key} />
        </TouchableOpacity>
      ))}
      <Slideup
        clicked={touched}
        setClicked={setTouched}
        description={desc}
        style={styles.descriptionText} // Apply the custom style
      />
    </ScrollView>
  );
};

export default CollectionScreen;
