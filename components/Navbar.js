// src/components/Navbar.js
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

const Tab = createBottomTabNavigator();

const Navbar = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        {/* Add more tabs/screens for other sections */}
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Navbar;