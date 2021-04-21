import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './src/Screens/HomeScreen';
import ExpensesScreen from './src/Screens/ExpensesScreen';
import ProfileScreen from './src/Screens/ProfileScreen';
import InvestmentsScreen from './src/Screens/InvestmentsScreen';
import NotificationsScreen from './src/Screens/NotificationsScreen';
import TestScreen from './src/Screens/TestScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Savings" component={HomeScreen} />
      <Tab.Screen name="Expenses" component={ExpensesScreen} />
      <Tab.Screen name="Investments" component={InvestmentsScreen} />
      <Tab.Screen name="Notifications" component={NotificationsScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

function MainScreen() {
  return (
    <Stack.Navigator>
      <Tab.Screen name="Savings" component={HomeScreen} />
      <Stack.Screen name="Test" component={TestScreen} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
       <Tab.Navigator>
      <Tab.Screen name="Savings" component={MainScreen} />
      <Tab.Screen name="Expenses" component={ExpensesScreen} />
      <Tab.Screen name="Investments" component={InvestmentsScreen} />
      <Tab.Screen name="Notifications" component={NotificationsScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
    </NavigationContainer>
  );
}