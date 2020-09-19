import React, { useContext, useEffect, useState } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import { AuthNavigator } from './src/navigation/AuthNavigator'
import { HomeNavigator } from './src/navigation/HomeNavigator'
import { WelcomeNavigator } from './src/navigation/WelcomeNavigator'
import { LoaderNavigator } from './src/navigation/LoaderNavigator'
import { Context as AuthContext } from './src/context/AuthContext'
import { Context as WelcomeContext } from './src/context/WelcomeContext'
import { navigationRef } from './src/RootNavigation';

const Stack = createStackNavigator()

export const AppNavigator = () => {
    const { state: authState, checkPast } = useContext(AuthContext)
    const { state: welcomeState } = useContext(WelcomeContext)
    const [isLoading, setIsLoading] = useState(true)
    
    useEffect(() => {
      let subscriber
      const func = async () => {
        subscriber = await checkPast()
        setIsLoading(false)
      }
      func()

      return () => {
        if (subscriber) {
          subscriber.remove()
        }
      }
    }, [])

    return (
      <NavigationContainer ref={navigationRef}>
        { isLoading ? <LoaderNavigator /> : null}
        { !authState.loggedBefore && !welcomeState.started && !authState.isLogged && !isLoading ? <WelcomeNavigator /> : null }
        { (authState.loggedBefore && !welcomeState.started && !authState.isLogged && !isLoading) || (welcomeState.started && !authState.isLogged && !isLoading) ? <AuthNavigator /> : null }
        { authState.isLogged && !isLoading ? <HomeNavigator /> : null }
      </NavigationContainer>
    )
}