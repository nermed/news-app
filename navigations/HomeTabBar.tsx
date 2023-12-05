import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomePage, SearchPage} from '../screens';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { RootParamList } from '../App';

const TabNavigation = createBottomTabNavigator<RootParamList>();

const HomeTabBar = () => {
  return (
    <TabNavigation.Navigator
      screenOptions={({navigation, route}) => {
        const icon =
          route.name === 'Home'
            ? 'home'
            : route.name === 'Search'
            ? 'search'
            : 'user';
        return {
          tabBarIcon: ({focused, size, color}) => (
            <FontAwesome
              name={icon}
              size={focused ? 35 : size}
              color={focused ? "#808080" : '#C2C2C2'}
            />
          ),
          tabBarShowLabel: false,
          headerShown: false,
        //   headerStyle: {
        //     backgroundColor: "transparent",
        //   }
        };
      }}>
      <TabNavigation.Screen name="Home" component={HomePage} />
      <TabNavigation.Screen name="Search" component={SearchPage} />
      <TabNavigation.Screen name="Account" component={HomePage} />
    </TabNavigation.Navigator>
  );
};

export default HomeTabBar;

const styles = StyleSheet.create({});
