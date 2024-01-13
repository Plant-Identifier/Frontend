import React from 'react';
import { View, Text } from 'react-native';
import Button from '../components/button';

const CameraScreen = () => {

  const handleButtonPress = () => {
    console.log("Test")
  };

  return (
    <View>
      <Text>Camera Screen</Text>
      <Button onPress={handleButtonPress} title="Upload Plant" />
      {/* Add camera-related components here */}
    </View>
  );
};

export default CameraScreen;
