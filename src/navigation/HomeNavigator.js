import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ProfileNavigator } from './ProfileNavigator'
import { FeedNavigator } from './FeedNavigator'
import { TeamsNavigator } from './TeamsNavigator'
import { Icon } from '@ui-kitten/components';
import { BottomTabBar as HomeTabBar } from '../components/HomeTabBar'

const PersonIcon = (props) => (
  <Icon {...props} name='person-outline'/>
);

const TeamIcon = (props) => (
  <Icon {...props} name='people-outline'/>
);

const FeedIcon = (props) => (
  <Icon {...props} name='home-outline'/>
);

const BottomTab = createBottomTabNavigator();
export const HomeNavigator = () => {
  return (
    <BottomTab.Navigator tabBar={props => <HomeTabBar {...props} />}>
        <BottomTab.Screen
            name="Feed"
            component={FeedNavigator}
            options={{ title: 'FEED', tabBarIcon: FeedIcon }}
        />
        <BottomTab.Screen
            name="Teams"
            component={TeamsNavigator}
            options={{ title: 'TEAMS', tabBarIcon: TeamIcon }}
        />
        <BottomTab.Screen
            name="Profile"
            component={ProfileNavigator}
            options={{ title: 'PROFILE', tabBarIcon: PersonIcon }}
        />
  </BottomTab.Navigator>
  )
}