import React from 'react';
import { View, Text, Modal, Image, Button, StyleSheet } from 'react-native';


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
                <Button title="Delete" color="#dc3545" onPress={props.handleDeletePlace} />
                <Button title="Cancel" color="#007bff" onPress={props.onCancelSelection} />
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
        alignItems: 'center'
    },
    actionsStyles: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    }
})