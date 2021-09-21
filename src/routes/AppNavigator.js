import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "../screens/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen";
import MatchesScreen from "../screens/MatchesScreen";

import {StyleSheet } from "react-native";

import FontAwesome from "react-native-vector-icons/FontAwesome";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const HomeNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen name="1" component={HomeScreen} />
    <Tab.Screen name="2" component={MatchesScreen} />
    <Tab.Screen name="3" component={ProfileScreen} options={{tabBarIcon: () => (
     <FontAwesome name="user" size = {30} style={styles.tabbarstyle}/>),}}/>

  </Tab.Navigator>
);

export const AppNavigator = () => (
  <NavigationContainer>
    <HomeNavigator />
  </NavigationContainer>
);

const styles = StyleSheet.create({
  tabbarstyle: {
    top: 10
  }
})
