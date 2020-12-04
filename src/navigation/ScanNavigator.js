import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import ScanScreen from '../screens/ScanScreen'

const Stack = createStackNavigator()

export const ScanNavigator = () => {
    return (
        <Stack.Navigator headerMode='none'>
            <Stack.Screen name="Scan" component={ScanScreen} />
        </Stack.Navigator>
    )
}