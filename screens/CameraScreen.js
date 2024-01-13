import React, {useState, useEffect} from 'react';
import { View, Text } from 'react-native';
import Button from '../components/button';
import CameraComponent from '../components/cameraComponent';
import { Camera } from 'expo-camera';

const CameraScreen = () => {

  // Tracks whether or not the device has access to the camera 
  const [hasPermission, setHasPermission] = useState(null);
  // Tracks whether or not the camera is open
  const [cameraOpen, setCameraOpen] = useState(false)

  // Requests camera permissions when the component mounts
  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  // Opens the camera when the upload button is pressed
  const handleButtonPress = () => {
    setCameraOpen(true);
  };

  // Returns to the previous page when the back button is pressed
  const handleBackButtonPress = () => {
    setCameraOpen(false);
  };

  return (
    <View style={{ flex: 1 }}>
      {!cameraOpen && <Button onPress={handleButtonPress} title="Upload Plant"/>}
      {cameraOpen && <CameraComponent hasCameraPermission={hasPermission} onBackButtonPress={handleBackButtonPress} />}
    </View>
  );
};

export default CameraScreen;
