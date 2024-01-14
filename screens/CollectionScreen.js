import {  default as React, useContext, useRef, useState } from 'react';
import { ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import Plant from '../components/Plant';
import Slideup from '../components/Slideup';
import { IMAGES } from '../constants/images';
import PlantsContext from '../context/PlantsContext';

const CollectionScreen = () => {
  const scrollViewRef = useRef();
  const [plantName, setPlantName] = useState("")
  const [plantImg, setPlantImg] = useState("")
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

  const handlePress = async (plantName) => {
    console.log(IMAGES[key])
    const search = plantName.split(/(?=[A-Z])/).join('%20');
    await fetchData(search);
    scrollViewRef.current?.scrollTo({ y: 0, animated: true});
    setPlantName(plantName)
    setTouched(!touched);
  };

  return (
    <ScrollView
      ref = {scrollViewRef}
      style={styles.scrollView}
      contentContainerStyle={styles.contentContainer}
      bouncesZoom={false}
      directionalLockEnabled={true}
      contentOffset={{ x: 0, y: 0 }}
      onLayout={(event) => {
        const { width, height } = event.nativeEvent.layout;
        console.log('New dimensions:', width, height);
      }}
    >
      {Object.keys(IMAGES).map((key) => (
        <TouchableOpacity key={key} onPress={() => handlePress(key)}>
          <Plant imgSrc={IMAGES[key]} name={key}/>
        </TouchableOpacity>
      ))}
      <Slideup
        clicked={touched}
        setClicked={setTouched}
        name={plantName}
        description={desc}
        imgSrc={plantImg}
        style={styles.descriptionText} // Apply the custom style
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    padding: 10,
    width: '100%',
  },
  scrollView: {
    backgroundColor: '#E3F6E1',
  },
  descriptionText: {
    fontSize: 18,
    padding: 10,
  },
  plantContainer: {
    width: '30%',
    margin: 5,
    alignItems: 'center',
  },
  plantImage: {
    width: '100%',
    height: 150,
    borderRadius: 10,
  },
  plantName: {
    marginTop: 5,
    fontSize: 16,
  },
});

export default CollectionScreen;
