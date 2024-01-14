import React, {useRef, useState } from 'react';
import { View, Text, Pressable, StyleSheet, Alert } from 'react-native';
import { Camera } from 'expo-camera';

const CameraComponent = ({ hasCameraPermission, onBackButtonPress }) => {

    // Reference for the camera 
    const cameraRef = useRef(null);
    // Tracks state of captured picture 
    const [picture, setPicture] = useState(null);

    const takePicture = async () => {
        // Checks if the camera is ready
        if (cameraRef.current) {
            try {
                // Takes the pictures 
                const photo = await cameraRef.current.takePictureAsync();
                setPicture(photo);
               
                // Saves photo locally (this url could be sent to the backend)
                const localUri = photo.uri;
                console.log(localUri);
                Alert.alert("Success", "Picture taken successfully!");
            } catch (error) {
                Alert.alert("Error", "Failed to take picture: " + error.message);
            }
        }
    };

    // If camera permission hasn't been accepted or denied yet (null), render nothing
    if (hasCameraPermission === null) {
        return <View />;
    }

    // If camera permission has been denied, a message will be displayed instead of the camera
    if (hasCameraPermission === false) {
        return <Text>No access to camera. Please change camera access in your settings.</Text>;
    }

    // If camera permission has been accepted, render the camera, take picture button, and the back button
    return (
        <View style={{ flex: 1 }}>
            <Camera style={{ flex: 1 }} type={Camera.Constants.Type.back} ref={cameraRef} />

            <Pressable style={styles.button} onPress={takePicture}>
                <Text style={styles.text}>Take Picture</Text>
            </Pressable>

            <Pressable style={styles.backButton} onPress={onBackButtonPress}>
                <Text  style={styles.text} >Back</Text>
            </Pressable>
            
        </View>
    );
};

export default CameraComponent;

// Styling for the back button 
const styles = StyleSheet.create({
    backButton: {
        position: 'absolute', 
        top: 20, 
        left: 20,
        paddingVertical: 12,
        paddingHorizontal: 16,
        borderRadius: 50,
        backgroundColor: 'black',
    },
    button: {
        position: 'absolute', 
        bottom: 20, 
        alignSelf: 'center',
        paddingVertical: 12,
        paddingHorizontal: 16,
        borderRadius: 50,
        backgroundColor: 'black',
    },
    text: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white',
        },
});