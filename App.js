import React from 'react';

// UI Kit
import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { default as theme } from './theme.json'
import { EvaIconsPack } from '@ui-kitten/eva-icons';

// Providers and Context
import { Provider as AuthProvider } from './src/context/AuthContext'
import { Provider as WelcomeProvider } from './src/context/WelcomeContext'

// Screens
import { AppNavigator } from './AppNavigator'

const App = () => {
    return (
      <AppNavigator />
    )
}

export default () => {
  return (
    <WelcomeProvider>
      <AuthProvider>
        <IconRegistry icons={EvaIconsPack} />
        <ApplicationProvider {...eva} theme={{...eva.dark, ...theme}}>
          <App />
        </ApplicationProvider>
      </AuthProvider>
    </WelcomeProvider>
    
  )
}