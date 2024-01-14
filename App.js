// App.js
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import * as SplashScreen from 'expo-splash-screen';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { useFonts } from 'expo-font';
import { AppLoading } from 'expo'; // Add this import

import CameraScreen from './screens/CameraScreen';
import CollectionScreen from './screens/CollectionScreen';
import WelcomeScreen from './screens/WelcomeScreen'; // Import the WelcomeScreen component
import HomeScreen from './screens/HomeScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

SplashScreen.preventAutoHideAsync()
setTimeout(SplashScreen.hideAsync, 5000)

const MainStack = () => (
  <Stack.Navigator initialRouteName="Welcome" headerMode="none">
    <Stack.Screen name="Welcome" component={WelcomeScreen} />
    <Stack.Screen name="TabNavigator" component={BottomTabNavigator} />
  </Stack.Navigator>
);


const BottomTabNavigator = () => (
      <Tab.Navigator>
        <Tab.Screen
          name="Camera"
          component={CameraScreen}
          options={{
            tabBarIcon: ({ focused, color, size }) => (
              <Ionicons
                name={focused ? 'ios-camera' : 'ios-camera-outline'}
                size={size}
                color={color}
              />
            ),
          }}
        />
        <Tab.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ focused, color, size }) => (
              <Ionicons
                name={focused ? 'ios-home' : 'ios-home-outline'}
                size={size}
                color={color}
              />
            ),
          }}
        />
        <Tab.Screen
          name="FloraDex"
          component={CollectionScreen}
          options={{
            tabBarIcon: ({ focused, color, size }) => (
              <Ionicons
                name={focused ? 'ios-albums' : 'ios-albums-outline'}
                size={size}
                color={color}
              />
            ),
          }}
        />
      </Tab.Navigator>
  );

  export default function App() {
    // const [fontsLoaded, error] = useFonts({
    //   'PixelifySans-Regular': require('./assets/myFonts/PixelifySans-Regular.ttf'),
    //   // Add other font weights/styles if needed
    // });
  
    // if (!fontsLoaded) {
    //   return <AppLoading />;
    // }
  
    return (
      <NavigationContainer>
        <MainStack />
      </NavigationContainer>
    );
  }