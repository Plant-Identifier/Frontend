// WelcomeScreen.jsx
import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const WelcomeScreen = () => {
  const navigation = useNavigation();

  const goToCameraScreen = () => {
    navigation.navigate('Camera');
  };

  const goToCollectionScreen = () => {
    navigation.navigate('Collection');
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Welcome to Your App!</Text>
      {/* Other welcome-related components here */}
      
      {/* Light green "Get Started" button */}
      <Button
        title="Get Started"
        onPress={goToCameraScreen}
        color="#7FFF00" // Light green color
      />
      
      {/* Optional: Add another button to navigate to the CollectionScreen */}
      {/* <Button title="Go to Collection Screen" onPress={goToCollectionScreen} /> */}
    </View>
  );
};

export default WelcomeScreen;
