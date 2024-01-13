import React from 'react';
import { View, Text, Button, Image, StyleSheet, FlatList, Dimensions, Animated } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { IMAGES } from '../constants/images';
import { constants } from 'buffer';

const WelcomeScreen = () => {
  const navigation = useNavigation();


  const illustrations = [
    { id: 1, source: require('../plant-images/Alfalfa.png') },
    { id: 2, source: require('../plant-images/Alfalfa.png') },
    { id: 3, source: require('../plant-images/Alfalfa.png') },
  ];

  const scrollX = new Animated.Value(0);

  const goToCameraScreen = () => {
    navigation.navigate('Camera');
  };

  const renderIllustration = ({ item }) => (
    <View style={styles.illustrationContainer}>
      <Image
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
      {/* Welcome text and other welcome-related components */}
      <Text>Welcome to WhatTheFlora!</Text>

      {/* Horizontal slide view with plant images */}
      <FlatList
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        data={illustrations}
        keyExtractor={(item) => `${item.id}`}
        renderItem={renderIllustration}
        onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], { useNativeDriver: false })}
      />

      {/* Pagination dots */}
      {renderPagination()}

      {/* Light green "Get Started" button */}
      <Button
        title="Get Started"
        onPress={goToCameraScreen}
        color="#7FFF00" // Light green color
      />
    </View>
  );
};

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  illustrationContainer: {
    width,
    height: height / 2,
  },
  illustration: {
    flex: 1,
    width: null,
    height: null,
    alignSelf: 'stretch',
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
});

export default WelcomeScreen;
