import React from 'react';
import { View, Text, Modal, Image, Button, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'


const placeDetails = (props) => {
    let modalContent = null;
    if (props.selectedPlace) {
        modalContent = (
            <View style={styles.selectedContentInfo} >
                <Image resizeMode='cover' source={props.selectedPlace.image} style={styles.imageStyles} />
                <Text style={styles.textStyles}>{props.selectedPlace.name}</Text>
            </View>
        )
    }
    return (
        <Modal onRequestClose={props.onCancelSelection}
            visible={props.selectedPlace !== null}
            animationType='slide'
        >
            {modalContent}
            <View style={styles.actionsStyles}>
                <TouchableOpacity onPress={props.handleDeletePlace}>
                    <Icon name="ios-trash" size={30} color="#dc3545" />
                </TouchableOpacity>
                {/* <Button title="Delete" color="#dc3545" /> */}
                <TouchableOpacity onPress={props.onCancelSelection} >
                    <Icon name="ios-close-circle-outline" size={30} color="#007bff" />
                </TouchableOpacity>
            </View>
        </Modal>
    );
}

export default placeDetails;

const styles = StyleSheet.create({
    imageStyles: {
        width: "100%",
        height: 200,
        marginBottom: 20
    },
    textStyles: {
        fontSize: 20,
        textAlign: 'center',
        color: 'black',
        fontWeight: "500"
    },
    selectedContentInfo: {
        margin: 20,
        marginTop: 50,
        alignItems: 'center'
    },
    actionsStyles: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    }
})