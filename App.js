// App.js
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import * as SplashScreen from 'expo-splash-screen';
import React from 'react';

import CameraScreen from './screens/CameraScreen';
import CollectionScreen from './screens/CollectionScreen';
import WelcomeScreen from './screens/WelcomeScreen'; // Import the WelcomeScreen component
import HomeScreen from './screens/HomeScreen';

const Tab = createBottomTabNavigator();
SplashScreen.preventAutoHideAsync()
setTimeout(SplashScreen.hideAsync, 5000)

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>

        <Tab.Screen name="Welcome" component={WelcomeScreen} />
        <Tab.Screen name="Camera" component={CameraScreen} />
        <Tab.Screen name="Collection" component={CollectionScreen} />
        <Tab.Screen name="HomeScreen" component={HomeScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
