import React, { useEffect, useRef } from "react";
import { Animated, Dimensions, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Slideup(props){
    const screenHeight = Dimensions.get('window').height;
    const translateY = useRef(new Animated.Value(screenHeight)).current;

    const styles = StyleSheet.create({
        fullScreen: {
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'white', // Or any color you want
        },
      });

    useEffect(() => {
        Animated.timing(translateY, {
            toValue: 0,
            duration: 500,
            useNativeDriver: true,
          }).start();
    }, [translateY])

    return props.clicked ? (
        <Animated.View style={[
            styles.fullScreen,
            {
              transform: [{ translateY }],
            },
          ]}>
            <TouchableOpacity
                onPress = {() => {props.setClicked(false)}}>
                <Text>Testing</Text>
            </TouchableOpacity>
        </Animated.View>
    ) : <View></View>
}