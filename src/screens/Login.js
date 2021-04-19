import React, { Component } from 'react'
import { Text, View, TextInput, StyleSheet, Button, TouchableOpacity } from 'react-native'

export default class Login extends Component {
    render() {
        return (
            <View style={styles.loginPage}>
                <TextInput 
                placeholder='Email Address'
                style={styles.input}
                />
                <TextInput 
                placeholder='Password'
                style={styles.input}
                />
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Sign in</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Create Account</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    input: {
        borderColor: 'grey',
        borderWidth: 3,
        height: 40,
        fontSize: 20,
        width: 350,
        marginTop: 20,
    },
    loginPage: {
        alignItems: 'center',
        top: 200,
    },
    button: {
        marginTop: 20,
        width: 150,
        height: 40,
        alignItems: 'center',
    },
    buttonText: {
        color: '#007AFF',
        fontSize: 20,
    }
})