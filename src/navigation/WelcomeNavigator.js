import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from '../screens/WelcomeScreen';

const Stack = createStackNavigator();

export const WelcomeNavigator = () => (
  <Stack.Navigator headerMode='none'>
    <Stack.Screen name="Welcome" component={WelcomeScreen}/>
  </Stack.Navigator>
);