import React from 'react';
import { View, Text, StyleSheet, FlatList, Dimensions, Animated, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const WelcomeScreen = () => {
  const navigation = useNavigation();

  const illustrations = [
    { id: 1, source: require('../plant-images/Alfalfa.png') },
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
    fontSize: 24,
    marginBottom: 5,
    marginVertical: 150,
    fontFamily: 'CuteFont', // Replace with the actual font family you want to use
  },
  illustrationContainer: {
    width: width - 8, // Adjust the width to make it smaller
    height: height / 4,
    marginVertical: 135, // Adjust the margin to move it down
  },
  illustration: {
    flex: 1,
    width: null,
    height: null,
    alignSelf: 'stretch',
    borderRadius: 30, // Add border radius to make it round
  },
  paginationContainer: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 20,
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
    borderRadius: 25, // Make it round
    paddingVertical: 15,
    paddingHorizontal: 30,
    position: 'absolute',
    bottom: 100, // Adjust the position
  },
  getStartedButtonText: {
    color: 'white',
    fontSize: 18,
  },
});

export default WelcomeScreen;
