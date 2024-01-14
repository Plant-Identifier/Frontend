import React, { useEffect, useRef } from "react";
import { Animated, Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

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
        let animationTimeout;

        if (props.clicked) {
            animationTimeout = setTimeout(() => {
                Animated.timing(translateY, {
                    toValue: 0,
                    duration: 500,
                    useNativeDriver: true,
                }).start();
            }, 1000); // Delay of 1000 ms before starting the animation
        }

        return () => {
            if (animationTimeout) {
                clearTimeout(animationTimeout);
            }
        };
    }, [props.clicked, translateY]);

    return props.clicked ? (
        <Animated.View style={[
            styles.fullScreen,
            {
              transform: [{ translateY }],
            },
          ]}>
            <TouchableOpacity
                onPress = {() => {props.setClicked(false)}}>
                <Text>{props.name}</Text>
                <Image
                  source={props.imgSrc}></Image>
                <Text>{props.description}</Text>
            </TouchableOpacity>
        </Animated.View>
    ) : <View></View>
}