import React from 'react';
import { Text, StyleSheet, Pressable } from 'react-native';

export default function Button(props) {
  const { onPress, title } = props;
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
}

// Style for the button
const styles = StyleSheet.create({
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