import React from 'react'
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';

const Input = (props) => (
    <View style={{ flexDirection: 'row', marginTop: 20, marginBottom: 20 }}>
        <TextInput
            style={[styles.inputStyles, styles.shadow]}
            placeholder="Enter a place"
            onChangeText={props.handlePlaceChange}
            value={props.placeName}
        />
        <TouchableOpacity style={[styles.buttonContainer, styles.shadow]} onPress={props.handleAlert}>
            <Text style={{ color: 'white' }}>ADD PLACE</Text>
        </TouchableOpacity>
    </View>
);

export default Input;

const styles = StyleSheet.create({
    shadow: {
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.5,
      shadowRadius: 1,
      elevation: 5,
    },
    buttonContainer: {
      backgroundColor: "#1a73e8",
      borderRadius: 5,
      width: 100,
      flexDirection: 'row',
      marginBottom: 20,
      alignItems: 'center',
      justifyContent: 'center',
      height: 50
    },
    inputStyles: {
      borderRadius: 5,
      height: 50,
      marginRight: 10,
      padding: 10,
      width: 240,
      backgroundColor: "white",
      borderColor: 'gray',
      borderWidth: 1
    }
  })