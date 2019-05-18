import React from 'react';
import { View, Text, Button, StyleSheet, StatusBar, TextInput, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class Login extends React.Component {
    state = {
        text: '',
        password:''
    }
    render() {
        return (
            <View style={styles.container}>
                <StatusBar backgroundColor="#1a73e8" barStyle="light-content" />
                <Image source={require("../Images/user.png")} style={[{ height: 50, width: 50, marginBottom: 20, borderRadius: 50 }]} />
                <View style={[styles.textContainer, styles.shadow]}>
                    {/* <Image source={require("../Images/user.png")} style={{ height: 20, width: 20, marginLeft: 15 }} /> */}
                    <Icon name='envelope' size={20} color="#1a73e8" style={{ marginLeft: 15 }} />
                    <TextInput
                        placeholder="Email"
                        onChangeText={(text) => this.setState({ text })}
                        value={this.state.text}
                        style={styles.input}
                    />
                </View>
                <View style={[styles.textContainer, styles.shadow]}>
                    <Icon name='key' size={20} color="#1a73e8" style={{ marginLeft: 15 }} />
                    {/* <Image source={require("../Images/user.png")} style={{ height: 20, width: 20, marginLeft: 15 }} /> */}
                    <TextInput
                        placeholder="Password"
                        onChangeText={(password) => this.setState({ password })}
                        value={this.state.text}
                        style={styles.input}
                    />
                </View>
                <TouchableOpacity style={[styles.buttonContainer, styles.shadow]}>
                    <Text style={{ color: 'white' }}>Login
                    {/* <Icon name="rocket" size={20} color="white" /> */}
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'whitesmoke',
        justifyContent: 'center',
        alignItems: "center"
    },
    textContainer: {
        backgroundColor: "white",
        borderRadius: 20,
        width: 240,
        flexDirection: 'row',
        marginBottom: 20
    },
    buttonContainer: {
        backgroundColor: "#1a73e8",
        borderRadius: 20,
        width: 240,
        flexDirection: 'row',
        marginBottom: 20,
        alignItems: 'center',
        justifyContent: 'center',
        height: 40
    },
    input: {
        height: 40,
        flex: 1
    },
    shadow: {
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.5,
        shadowRadius: 1,
        elevation: 5,
    }
});