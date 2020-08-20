import React, { useContext, useEffect } from 'react'
import AsyncStorage from '@react-native-community/async-storage'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import { AuthNavigator } from './src/navigation/AuthNavigator'
import { HomeNavigator } from './src/navigation/HomeNavigator'
import { WelcomeNavigator } from './src/navigation/WelcomeNavigator'
import { Context as AuthContext } from './src/context/AuthContext'
import { Context as WelcomeContext } from './src/context/WelcomeContext'
import { navigationRef } from './src/RootNavigation';

const Stack = createStackNavigator()

export const AppNavigator = () => {
    const { state: authState, checkPast } = useContext(AuthContext)
    const { state: welcomeState } = useContext(WelcomeContext)

    useEffect(() => {
      checkPast()
      console.log('Did I login before? = ' + authState.loggedBefore)
    }, [])

    console.log('isLogged:' + authState.isLogged)
    console.log('started:'+welcomeState.started)

    return (
      <NavigationContainer ref={navigationRef}>
        { !authState.loggedBefore && !welcomeState.started && !authState.isLogged ? <WelcomeNavigator /> : null }
        { (authState.loggedBefore && !welcomeState.started) || (welcomeState.started && !authState.isLogged) ? <AuthNavigator /> : null }
        { authState.isLogged ? <HomeNavigator /> : null }
      </NavigationContainer>
    )
}