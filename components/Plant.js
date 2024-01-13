import React from 'react';
import { Image, Text, View } from 'react-native';

export default function Plant(props){
    return (
        <View
        style = {
            {margin: 10,
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'}
        }>
            <Image
                source = {props.imgSrc}
                style = {{width: 100, height: 100}}
            />
            <Text>{props.name}</Text>
        </View>
    )
} 