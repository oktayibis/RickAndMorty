import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

const Character = ({char}) => {
  const styles = StyleSheet.create({
    container: {
      backgroundColor: '#3C3D43',
      margin: 10,
      width: '45%',
      borderRadius: 10,
      flexDirection: 'row',
      overflow: 'hidden',
    },
    contentContainer: {
      marginLeft: 5,
    },
    imageContainer: {
      width: 80,
      height: 80,
    },
    image: {
      width: '100%',
      height: '100%',
      borderTopLeftRadius: 10,
      borderBottomLeftRadius: 10,
    },
    statusContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    dot: {
      color: char.status.toLowerCase() === 'alive' ? 'green' : 'red',
    },
    text: {
      color: 'white',
      fontSize: 12,
    },
    textGrey: {
      color: '#817F7D',
      fontSize: 10,
    },
  });
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{uri: char.image}} />
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.text}>{char.name}</Text>
        <View style={styles.statusContainer}>
          <Text style={[styles.text, styles.dot]}>{char.status} - </Text>
          <Text style={styles.text}>{char.species}</Text>
        </View>
        <Text style={styles.text}>{char.location.name}</Text>
        <Text style={styles.textGrey}>Species: </Text>
        <Text style={styles.text}>{char.gender}</Text>
      </View>
    </View>
  );
};

export default Character;
