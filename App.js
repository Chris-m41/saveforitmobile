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

function Savings() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Savings" component={HomeScreen} />
      <Stack.Screen name="Test" component={TestScreen} />
    </Stack.Navigator>
  );
}

function Expenses() {
  return (
    <Stack.Navigator>
      <Tab.Screen name="Expenses" component={ExpensesScreen} />
    </Stack.Navigator>
  );
}

function Investments() {
  return (
    <Stack.Navigator>
      <Tab.Screen name="Investments" component={InvestmentsScreen} />
    </Stack.Navigator>
  );
}

function Notifications() {
  return (
    <Stack.Navigator>
      <Tab.Screen name="Notifications" component={NotificationsScreen} />
    </Stack.Navigator>
  );
}

function Profile() {
  return (
    <Stack.Navigator>
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
       <Tab.Navigator>
      <Tab.Screen name="Savings" component={Savings} />
      <Tab.Screen name="Expenses" component={Expenses} />
      <Tab.Screen name="Investments" component={Investments} />
      <Tab.Screen name="Notifications" component={Notifications} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
    </NavigationContainer>
  );
}