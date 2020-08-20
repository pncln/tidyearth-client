import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import FeedScreen from '../screens/FeedScreen';

const Stack = createStackNavigator();

export const FeedNavigator = () => (
  <Stack.Navigator headerMode='none'>
    <Stack.Screen name="Profile" component={FeedScreen}/>
  </Stack.Navigator>
);