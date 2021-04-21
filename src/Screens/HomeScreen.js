import React, { Component } from 'react'
import { Text, StyleSheet, View, SafeAreaView, TextInput, Button } from 'react-native'
import { useNavigation } from '@react-navigation/native';

class HomeScreen extends Component {
    render() {
        const { navigation } = this.props;
        return (
            <SafeAreaView style={styles.container}>
                <Text> Paycheck Amount </Text>
                <TextInput placeholder='$800' />
                <Text> Paychecks per month </Text>
                <TextInput placeholder='2' />
                <Text> Monthly Expenses </Text>
                <TextInput placeholder='$1000' />
                <Text> Monthly towards Savings </Text>
                <TextInput placeholder='$50' />
                <Text> Monthly towards Investments </Text>
                <TextInput placeholder='$50' />
                <Button
      title="Next"
      onPress={() => {
        navigation.navigate('Current Savings');
      }}
    />
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

export default function(props) {
    const navigation = useNavigation();
  
    return <HomeScreen {...props} navigation={navigation} />;
  }