import React from 'react'

import { Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const Lists = (props) => (
    <TouchableOpacity onPress={props.handleDelete} style={[styles.listItems, styles.shadow]}>
        <Image resizeMode='cover' source={props.image} style={{ width: 30, height: 30, marginRight: 10 }} />
        <Text style={{ fontSize: 20, color: 'black', fontWeight: '500' }}>{props.places}</Text>
    </TouchableOpacity>
);

export default Lists;

const styles = StyleSheet.create({
    listItems: {
        flex: 1,
        backgroundColor: "white",
        padding: 10,
        color: 'black',
        marginLeft: 30,
        marginRight: 30,
        marginBottom: 10,
        flexDirection: 'row'
    },
    shadow: {
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.5,
        shadowRadius: 1,
        elevation: 5,
    }
})