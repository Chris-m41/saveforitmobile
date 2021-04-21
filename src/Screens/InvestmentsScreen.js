import React, { Component } from 'react'
import { Text, StyleSheet, View, SafeAreaView } from 'react-native'

export default class InvestmentsScreen extends Component {
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <Text> Investments </Text>
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
