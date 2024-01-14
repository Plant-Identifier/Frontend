import {
  SpaceMono_400Regular,
  SpaceMono_400Regular_Italic,
  SpaceMono_700Bold,
  SpaceMono_700Bold_Italic,
  useFonts,
} from '@expo-google-fonts/space-mono';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Animated, Dimensions, FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { Lemon_400Regular } from '@expo-google-fonts/lemon';

const WelcomeScreen = () => {
  const navigation = useNavigation();

  const [fontsLoaded] = useFonts({
    SpaceMono_400Regular,
    SpaceMono_400Regular_Italic,
    SpaceMono_700Bold,
    SpaceMono_700Bold_Italic,
    Lemon_400Regular,
  });

  if (!fontsLoaded) return <Text style={styles.welcomeText}>Welcome to WhatTheFlora!</Text>;

  const illustrations = [
    { id: 1, source: require('../plant-images/Fireweed.png') },
    { id: 2, source: require('../plant-images/PineappleWeed.png') },
    { id: 3, source: require('../plant-images/Sunflower.png') },
  ];

  const scrollX = new Animated.Value(0);

  const goToHomeScreen = () => {
    navigation.navigate('TabNavigator', { screen: 'FloraHome' });
  };

  const renderIllustration = ({ item }) => (
    <View style={styles.illustrationContainer}>
      <Animated.Image
        source={item.source}
        resizeMode="contain"
        style={styles.illustration}
      />
    </View>
  );

  const renderPagination = () => (
    <View style={styles.paginationContainer}>
      {illustrations.map((_, index) => {
        const opacity = scrollX.interpolate({
          inputRange: [(index - 1) * width, index * width, (index + 1) * width],
          outputRange: [0.4, 1, 0.4],
          extrapolate: 'clamp',
        });

        return <Animated.View key={`dot-${index}`} style={[styles.dot, { opacity }]} />;
      })}
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Welcome to WhatTheFlora!</Text>

      <FlatList
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        data={illustrations}
        keyExtractor={(item) => `${item.id}`}
        renderItem={renderIllustration}
        onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], { useNativeDriver: false })}
      />

      {renderPagination()}

      {/* New Round "Get Started" Button */}
      <TouchableOpacity
        onPress={goToHomeScreen}
        style={styles.getStartedButton}
      >
        <Text style={styles.getStartedButtonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
};

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E3F6E1',
  },
  welcomeText: {
    fontFamily: 'SpaceMono_700Bold',
    fontSize: 25,
    marginBottom: 5,
    marginVertical: height / 8, // Adjusted for responsiveness
  },
  illustrationContainer: {
    width: width - 8,
    height: height / 4,
    marginVertical: height / 5,
  },
  illustration: {
    flex: 1,
    width: null,
    height: null,
    alignSelf: 'stretch',
    borderRadius: 30,
  },
  paginationContainer: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: height / 12, // Adjusted for responsiveness
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#888',
    marginHorizontal: 5,
  },
  getStartedButton: {
    backgroundColor: '#A4AF91',
    borderRadius: 25,
    paddingVertical: 15,
    paddingHorizontal: 30,
    position: 'absolute',
    bottom: height / 4, // Adjusted for responsiveness
  },
  getStartedButtonText: {
    fontFamily: 'SpaceMono_700Bold',
    color: 'white',
    fontSize: 28,
  },
});

export default WelcomeScreen;
