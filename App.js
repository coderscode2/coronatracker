import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Icon } from 'native-base';

import TrackerMapComponent from './app/views/trackermap';
import ReportCaseComponent from './app/views/reportcase';

console.disableYellowBox = true;

const BottomTabs = createBottomTabNavigator();
const Stack = createStackNavigator();

const TrackerMapStack = ({ navigation, route}) => {
  return (
    <Stack.Navigator initialRouteName="TrackerMap" screenOptions={{ headerTitleAlign: 'center', headerTitle: 'Tracker Map' }}>
      <Stack.Screen name="TrackerMap" component={TrackerMapComponent}/>
    </Stack.Navigator>
  )
}

const ReportCaseStack = ({ navigation, route}) => {
  return (
    <Stack.Navigator initialRouteName="Report" screenOptions={{ headerTitleAlign: 'center' }}>
      <Stack.Screen name="Report" component={ReportCaseComponent}/>
    </Stack.Navigator>
  )
}

const renderIcon = (iconName, color, size, iconType) => <Icon name={iconName} type={iconType || 'MaterialCommunityIcons'} style={{color: color, size: size}}/>

const BottomTabContainer = (
  <BottomTabs.Navigator initialRouteName="TrackerMap">
    <BottomTabs.Screen 
      name="TrackerMap" component={TrackerMapComponent} 
      options={{ tabBarLabel: 'Tracker', tabBarIcon: ({color, size}) => renderIcon('map-marker-multiple', color, size)}}
      />
      <BottomTabs.Screen 
      name="ReportCase" component={ReportCaseComponent} 
      options={{ tabBarLabel: 'Report', tabBarIcon: ({color, size}) => renderIcon('account-plus-outline', color, size)}}
      />
  </BottomTabs.Navigator>
)

function App() {
  return (
    <NavigationContainer>
      <BottomTabs.Navigator initialRouteName="TrackerMap">
    <BottomTabs.Screen 
      name="TrackerMap" component={TrackerMapStack} 
      options={{ tabBarLabel: 'Tracker', tabBarIcon: ({color, size}) => renderIcon('map-marker-multiple', color, size)}}
      />
      <BottomTabs.Screen 
      name="ReportCase" component={ReportCaseStack} 
      options={{ tabBarLabel: 'Report', tabBarIcon: ({color, size}) => renderIcon('account-plus-outline', color, size)}}
      />
  </BottomTabs.Navigator>
    </NavigationContainer>
  )
}

export default App;