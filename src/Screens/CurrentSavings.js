import React, { Component } from 'react'
import { Text, StyleSheet, TextInput, SafeAreaView, Button } from 'react-native'
import { useNavigation } from '@react-navigation/native';

class CurrentSavings extends Component {
    state = {
        currentCheckings: 0,
        currentSavings: 0,
        currentInvestments: 0,
    };

    saveInfo = () => {
        console.log('props', this.props.route.params.state);
        console.log('this.state', this.state);
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <Text style={styles.text}> Current Checkings </Text>
                <TextInput 
                placeholder='$1000' 
                onChangeText={currentCheckings => this.setState({currentCheckings})}
                />
                <Text style={styles.text}> Current Savings </Text>
                <TextInput 
                placeholder='$200' 
                onChangeText={currentSavings => this.setState({currentSavings})}
                />
                <Text style={styles.text}> Current Investments </Text>
                <TextInput 
                placeholder='$50' 
                onChangeText={currentInvestments => this.setState({currentInvestments})}
                />
                <Button
                title="Save"
                onPress={this.saveInfo}
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
        fontSize: 35,
    },
})

export default function(props) {
    const navigation = useNavigation();
  
    return <CurrentSavings {...props} navigation={navigation} />;
  }