import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainScreen from "../screens/MainScreen";
import Profile from "../screens/Profile";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const HomeNavigator = () => (
  <Tab.Navigator headerMode="none">
    <Tab.Screen name="MainScreen" component={MainScreen} />
    <Tab.Screen name="Profile" component={Profile} options={{headerShown: false}} />
  </Tab.Navigator>
);

export const AppNavigator = () => (
  <NavigationContainer>
    <HomeNavigator />
  </NavigationContainer>
);