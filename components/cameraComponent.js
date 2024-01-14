import { Camera } from 'expo-camera';
import * as FileSystem from 'expo-file-system';
import React, { useContext, useRef, useState } from 'react';
import { ActivityIndicator, Alert, Pressable, StyleSheet, Text, View } from 'react-native';
import PlantsContext from "../context/PlantsContext";

const CameraComponent = ({ hasCameraPermission, onBackButtonPress }) => {
    const { plants, addPlant, removePlant } = useContext(PlantsContext)
    
    // Reference for the camera 
    const cameraRef = useRef(null);
    // Tracks state of captured picture 
    const [picture, setPicture] = useState(null);

    // New state for loading indicator
    const [isLoading, setIsLoading] = useState(false);

    const takePicture = async () => {
        // Checks if the camera is ready
        if (cameraRef.current) {
            try {
                // Takes the pictures 
                const photo = await cameraRef.current.takePictureAsync();
                setPicture(photo);

                 // Start loading page
                setIsLoading(true);
               
                encodeImage(photo.uri)

                // instead of alert, call backend & pull up slide up component to display info
                //Alert.alert("Success", "Picture taken successfully!");

            } catch (error) {
                Alert.alert("Error", "Failed to take picture: " + error.message);
                setIsLoading(false);
            }
        }
    };

    // Render loading screen when isLoading is true
    if (isLoading) {
        return (
            <View style={styles.loadingContainer}>
                <ActivityIndicator size="large" color="#0000ff" />
            </View>
        );
    }


    const encodeImage = async (imageUri) => {
        try {
            const base64 = await FileSystem.readAsStringAsync(imageUri, { encoding: 'base64' });
            const imageData = `data:image/jpg;base64,${base64}`;

            sendBack(imageData);
        } catch (error) {
            console.error("Error encoding image", error);
        }
    };

    const sendBack = async (encodedImage) => {
        try {
            const response = await fetch('https://6f89-2605-8d80-682-2c53-649e-56fd-73f5-9971.ngrok-free.app/upload', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ image: encodedImage }),
            });
            const responseData = await response.text();
            alert("Your plant is a " + responseData)

            // Stop loading page
            setIsLoading(false);
            
            
            console.log(responseData);
            addPlant(responseData)
            console.log(plants)
        } catch (error) {
            console.error("Error sending to backend", error);
        }
    }

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
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});