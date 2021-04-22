import React, { useState, Component } from 'react'
import { Text, StyleSheet, SafeAreaView, TextInput, Button } from 'react-native'
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
        this.props.navigation.navigate('Current Savings', { state: this.state });
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <Text> Paycheck Amount </Text>
                <TextInput 
                placeholder='$800' 
                onChangeText={paycheck => this.setState({paycheck})}
                />
                <Text> Paychecks per month </Text>
                <TextInput 
                placeholder='2' 
                onChangeText={occurences => this.setState({occurences})}
                />
                <Text> Monthly Expenses </Text>
                <TextInput 
                placeholder='$1000' 
                onChangeText={expenses => this.setState({expenses})}
                />
                <Text> Monthly towards Savings </Text>
                <TextInput 
                placeholder='$50' 
                onChangeText={towardsSavings => this.setState({towardsSavings})}
                />
                <Text> Monthly towards Investments </Text>
                <TextInput 
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
})

export default function(props) {
    const navigation = useNavigation();
  
    return <HomeScreen {...props} navigation={navigation} />;
  }