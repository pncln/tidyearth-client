import React from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, Layout, Text } from '@ui-kitten/components';
import AccountScreen from './src/screens/AccountScreen'
import { default as theme } from './theme.json'

export default () => (
  <ApplicationProvider {...eva} theme={{...eva.dark, ...theme}}>
    <AccountScreen />
  </ApplicationProvider>
);