import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { Camera } from 'expo-camera';

const CameraComponent = ({ hasCameraPermission, onBackButtonPress }) => {

    // If camera permission hasn't been accepted or denied yet (null), render nothing
    if (hasCameraPermission === null) {
        return <View />;
    }

    // If camera permission has been denied, a message will be displayed instead of the camera
    if (hasCameraPermission === false) {
        return <Text>No access to camera. Please change camera access in your settings.</Text>;
    }

    // If camera permission has been accepted, render the camera and the back button
    return (
        <View style={{ flex: 1 }}>
            <Camera style={{ flex: 1 }} type={Camera.Constants.Type.back} />

            <Pressable style={styles.button} onPress={onBackButtonPress}>
                <Text  style={styles.text} >Back</Text>
            </Pressable>
            
        </View>
    );
};

export default CameraComponent;

// Styling for the back button 
const styles = StyleSheet.create({
    button: {
        position: 'absolute', 
        top: 20, 
        left: 20,
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