import React, { Component } from 'react'
import { Text, StyleSheet, View, SafeAreaView, Button } from 'react-native'
import { useNavigation } from '@react-navigation/native';

class NotificationsScreen extends Component {
    // homeScreenState = this.props.route.params.homeScreen;
    // currentSavingsState = this.props.route.params.currentSavings;
    saveInfo = () => {
        console.log('Nprops', this.props.route.currentSavings);
        console.log('Nthis.state', this.state);
    }
    mockMonths =['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December', 'Total Saved', 'Total Overall'];
    mockCheckings = [1000, 1200, 1400, 1500, 1700, 1900, 2100, 2200, 2400, 2500, 2700, 3000, 1800, 4800];
    mockSavings = [50, 100, 150, 200, 250, 300, 350, 400, 450, 500, 550, 600];
    mockInvestments = [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100, 1200];

    render() {
        console.log('hit the not screen')
        console.log('Nprops', this.props.route.params);
        console.log('Nthis.state', this.state);
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.horizontal}>
                    <View style={styles.verticalCheckings}>
                    <Text style={styles.text}> Month </Text>
                    {this.mockMonths.map(months =>
                        <Text style={styles.info}>{months}</Text>
                    )}
                    </View>
                    <View style={styles.verticalCheckings}>
                    <Text style={styles.text}> Checkings </Text>
                    {this.mockCheckings.map(checkings =>
                        <Text style={styles.info}> ${checkings}</Text>
                    )}
                    </View>
                    <View>
                    <Text style={styles.text}> Savings </Text>
                    {this.mockSavings.map(savings =>
                        <Text style={styles.info}> ${savings}</Text>
                    )}
                    </View>
                    <View>
                    <Text style={styles.text}> Investments </Text>
                    {this.mockInvestments.map(investments =>
                        <Text style={styles.info}> ${investments}</Text>
                    )}
                    </View>
                </View>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'space-evenly',
        // alignItems: 'center',
    },
    text: {
        fontSize: 20,
    },
    horizontal: {
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    verticalCheckings: {
        // justifyContent: 'flex-start'
    },
    info: {
        fontSize: 17,
        paddingTop: 10,
        paddingBottom: 10,  
    }
})

export default function(props) {
    const navigation = useNavigation();
  
    return <NotificationsScreen {...props} navigation={navigation} />;
  }