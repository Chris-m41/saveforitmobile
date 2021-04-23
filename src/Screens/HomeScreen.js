import React, { useState, Component } from 'react'
import { Text, StyleSheet, SafeAreaView, TextInput, Button, View } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import {Picker} from '@react-native-picker/picker';
import CurrentSavings from './CurrentSavings';

class HomeScreen extends Component {
    state = {
        paycheck: 0,
        occurences: 0,
        expenses: 0,
        towardsSavings: 0,
        towardsInvestments: 0,
    };

    onSubmit = () => {
        console.log('state', this.state);
        this.props.navigation.navigate('Current Savings', { homeScreen: this.state });
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <Text style={styles.text}> Paycheck Amount </Text>
                <TextInput 
                style={styles.textInput}
                placeholder='$800' 
                onChangeText={paycheck => this.setState({paycheck})}
                />
                <Text style={styles.text}> Paychecks per month </Text>
                <TextInput 
                style={styles.textInput}
                placeholder='2' 
                onChangeText={occurences => this.setState({occurences})}
                />
                <Text style={styles.text}> Monthly Expenses </Text>
                <TextInput 
                style={styles.textInput}
                placeholder='$1000' 
                onChangeText={expenses => this.setState({expenses})}
                />
                <Text style={styles.text}> Monthly towards Savings </Text>
                <TextInput 
                style={styles.textInput}
                placeholder='$50' 
                onChangeText={towardsSavings => this.setState({towardsSavings})}
                />
                <Text style={styles.text}> Monthly towards Investments </Text>
                <TextInput 
                style={styles.textInput}
                placeholder='$50' 
                onChangeText={towardsInvestments => this.setState({towardsInvestments})}
                />
                <Button
                title="Next"
                onPress={this.onSubmit}
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
    text: {
        fontSize: 23,
    },
    textInput: {
        height: 35,
        borderWidth: 2,
        width: 200,
        fontSize: 20,
    },
    textInputV2: {
        flexDirection: 'row',
    }
})

export default function(props) {
    const navigation = useNavigation();
  
    return <HomeScreen {...props} navigation={navigation} />;
  }