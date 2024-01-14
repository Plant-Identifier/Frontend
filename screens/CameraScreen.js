import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Button from '../components/button';
import CameraComponent from '../components/cameraComponent';
import { Camera } from 'expo-camera';

const CameraScreen = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const [cameraOpen, setCameraOpen] = useState(false);


  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleButtonPress = () => {
    setCameraOpen(true);
  };

  const handleBackButtonPress = () => {
    setCameraOpen(false);
  };

  return (
    <View style={styles.container}>
      {!cameraOpen && (
        <TouchableOpacity style={styles.button} onPress={handleButtonPress}>
          <Text style={styles.buttonText}>Upload Plant</Text>
        </TouchableOpacity>
      )}
      {cameraOpen && <CameraComponent hasCameraPermission={hasPermission} onBackButtonPress={handleBackButtonPress} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    zIndex: -1,
    backgroundColor: '#CDEAC0',
  },
  button: {
    backgroundColor: '#A4AF91',
    borderRadius: 10,
    paddingVertical: 50,
    paddingHorizontal: 50,
    position: 'absolute',
    bottom: 30,
    alignSelf: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
  },
});

export default CameraScreen;
