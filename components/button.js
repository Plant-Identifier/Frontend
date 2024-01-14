import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';

export default function Button(props) {
  const { onPress, title } = props;
  return (
    <View style={styles.container}>
      <Pressable style={styles.button} onPress={onPress}>
        <Text style={styles.text}>{title}</Text>
      </Pressable>
    </View>
    
  );
}

// Style for the button
const styles = StyleSheet.create({
  container: {
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center',
    },
    button: {
      alignItems: 'center',
      paddingVertical: 12, // Controls height of button
      paddingHorizontal: 16, // Controls width of button
      borderRadius: 50, // Rounds the button
      backgroundColor: 'black',
      alignSelf: 'center', // Center horizontally
    },
    text: {
      fontSize: 16,
      fontWeight: 'bold',
      color: 'white',
    },
  });