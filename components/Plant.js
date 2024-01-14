import React, { useContext } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import PlantsContext from "../context/PlantsContext";

export default function Plant(props){
    const { plants } = useContext(PlantsContext);
    
    // Check if the plant name exists in the plants array
    const isDiscovered = plants.includes(props.name);

    const styles = StyleSheet.create({
        imageStyle: {
            width: 100, 
            height: 100,
            ...(isDiscovered ? {} : { tintColor: 'gray' })
        },
        container: {
            margin: 10,
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
        }
    });

    return (
        <View style={styles.container}>
            <Image
                source={props.imgSrc}
                style={styles.imageStyle}
            />
            <Text>{props.name}</Text>
        </View>
    );
}
