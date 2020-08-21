import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import LoaderScreen from '../screens/LoaderScreen';

const Stack = createStackNavigator();

export const LoaderNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen options={{headerShown: false}} name="Loader" component={LoaderScreen} />
        </Stack.Navigator>
    )
}