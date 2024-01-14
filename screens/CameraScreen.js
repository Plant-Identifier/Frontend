import { Camera } from 'expo-camera';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import CameraComponent from '../components/cameraComponent';

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
      <View style={styles.background} />
      {!cameraOpen && (
        <TouchableOpacity style={styles.button} onPress={handleButtonPress}>
          <Image
            source={{ uri: 'https://static.vecteezy.com/system/resources/previews/012/450/943/original/vintage-8-bit-camera-pixel-art-illustration-of-camera-cross-stitch-pattern-vector.jpg' }}
            style={styles.buttonImage}
          />
          <Text style={styles.buttonText}>CLICK TO SCOUT</Text>
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
    ...StyleSheet.absoluteFillObject,
    zIndex: -1,
    backgroundColor: '#E3F6E1',
  },
  button: {
    position: 'center',
    bottom: -280,
    alignSelf: 'center',
  },
  buttonImage: {
    width: 150, // Adjust the width as needed
    height: 150, // Adjust the height as needed
  },
  buttonText: {
    fontSize: 18,
      fontWeight: "bold",
      fontFamily: 'SpaceMono_700Bold',
    },
});

export default CameraScreen;
