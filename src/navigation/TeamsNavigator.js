import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import TeamsScreen from '../screens/TeamsScreen';

const Stack = createStackNavigator();

export const TeamsNavigator = () => (
  <Stack.Navigator headerMode='none'>
    <Stack.Screen name="Teams" component={TeamsScreen}/>
  </Stack.Navigator>
);