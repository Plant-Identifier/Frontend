// App.js
import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SplashScreen from 'react-native-splash-screen';


import WelcomeScreen from './screens/WelcomeScreen'; // Create this component
import CameraScreen from './screens/CameraScreen';
import CollectionScreen from './screens/CollectionScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  useEffect(() => {
    // Hide splash screen after your component mounts
    SplashScreen.hide();
  }, []);

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Welcome" component={WelcomeScreen} />
        <Tab.Screen name="Camera" component={CameraScreen} />
        <Tab.Screen name="Collection" component={CollectionScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
