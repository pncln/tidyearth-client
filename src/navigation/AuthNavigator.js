import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import SigninScreen from '../screens/SigninScreen'
import SignupScreen from '../screens/SignupScreen'

const Stack = createStackNavigator();

export const AuthNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen options={{headerShown: false}} name="Signin" component={SigninScreen} />
            <Stack.Screen options={{headerShown: false}} name="Signup" component={SignupScreen} />
        </Stack.Navigator>
    )
}