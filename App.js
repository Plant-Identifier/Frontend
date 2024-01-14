// App.js
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as SplashScreen from 'expo-splash-screen';
import React from 'react';

import PlantsProvider from './context/PlantsProvider';
import CameraScreen from './screens/CameraScreen';
import CollectionScreen from './screens/CollectionScreen';
import HomeScreen from './screens/HomeScreen';
import WelcomeScreen from './screens/WelcomeScreen'; // Import the WelcomeScreen component

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

SplashScreen.preventAutoHideAsync()
setTimeout(SplashScreen.hideAsync, 5000)

const MainStack = () => (
  <Stack.Navigator initialRouteName="Welcome" headerMode="none">
    <Stack.Screen name="Welcome"
      component={WelcomeScreen}
      options={{ gestureEnabled: false }}/>
    <Stack.Screen name="TabNavigator" component={BottomTabNavigator} />
  </Stack.Navigator>
);


const BottomTabNavigator = () => (
      <Tab.Navigator>
        <Tab.Screen
          name="FloraScout"
          component={CameraScreen}
          options={{
            tabBarIcon: ({ focused, color, size }) => (
              <Ionicons
                name={focused ? 'ios-camera' : 'ios-camera-outline'}
                size={size}
                color={'#9CC29D'}
              />
            ),
          }}
        />
        <Tab.Screen
          name="FloraHome"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ focused, color, size }) => (
              <Ionicons
                name={focused ? 'ios-home' : 'ios-home-outline'}
                size={size}
                color={'#9CC29D'}
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
                color={'#9CC29D'}
              />
            ),
          }}
        />
      </Tab.Navigator>
  );

  export default function App() {
  
    return (
      <PlantsProvider>
        <NavigationContainer>
          <MainStack />
        </NavigationContainer>
      </PlantsProvider>
    );
  }