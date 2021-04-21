import React, { Component } from 'react'
import { Text, StyleSheet, View, SafeAreaView } from 'react-native'

export default class NotificationsScreen extends Component {
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <Text> Notifications </Text>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
})
