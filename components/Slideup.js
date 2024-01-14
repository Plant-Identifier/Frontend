import {
  SpaceMono_400Regular,
  SpaceMono_400Regular_Italic,
  SpaceMono_700Bold,
  SpaceMono_700Bold_Italic,
  useFonts,
} from '@expo-google-fonts/space-mono';
import React, { useEffect, useRef } from "react";
import { Animated, Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Slideup(props){
    const screenHeight = Dimensions.get('window').height;
    const translateY = useRef(new Animated.Value(screenHeight)).current;
    const { width } = Dimensions.get('window');

    const [fontsLoaded] = useFonts({
      SpaceMono_400Regular,
      SpaceMono_400Regular_Italic,
      SpaceMono_700Bold,
      SpaceMono_700Bold_Italic,
    });

    const styles = StyleSheet.create({
        fullScreen: {
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: '#E2EEE1',
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
            <View
              style = {{
                flex: 1,
                flexDirection: 'column',
                alignItems: 'center',
                marginTop: 30,
                left: (width - 350),
                width: 300
              }}>
                <Text
                  style = {{
                    fontSize: 30,
                    fontFamily: 'SpaceMono_700Bold'
                  }}>{props.name}</Text>
                <Image
                  source={props.imgSrc}
                  style = {
                    { width: 300,
                      height: 300,
                    }
                  }></Image>
                <Text
                  style = {{
                    textAlign: 'center',
                    fontFamily: 'SpaceMono_700Bold'
                  }}>{props.description}</Text>
                <TouchableOpacity
                  onPress = {() => {props.setClicked(false)}}>
                  <Text
                  style = {{
                    marginTop: 30,
                  }}>Back To FloraDex</Text>
                </TouchableOpacity>
                </View>
        </Animated.View>
    ) : <View></View>
}