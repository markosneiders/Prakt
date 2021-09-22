import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "../screens/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen";
import MatchesScreen from "../screens/MatchesScreen";

import { StyleSheet } from "react-native";

import FontAwesome from "react-native-vector-icons/FontAwesome";
import Fontisto from "react-native-vector-icons/Fontisto";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Ionicons from "react-native-vector-icons/Ionicons";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const HomeNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen
      name="Home"
      component={HomeScreen}
      options={{
        headerShown:  null,
        tabBarIcon: () => (
          <Fontisto name="home" size={30} style={styles.tabbarstyle} />
        ),
      }}
    />
    <Tab.Screen
      name="Matches"
      component={MatchesScreen}
      options={{
        tabBarIcon: () => (
          <MaterialCommunityIcons
            name="star-four-points"
            size={30}
            style={styles.tabbarstyle}
          />
        ),
      }}
    />
    <Tab.Screen
      name="Edit Profile"
      component={ProfileScreen}
      options={{
        tabBarIcon: () => (
          <FontAwesome name="user" size={30} style={styles.tabbarstyle} />
        ),
      }}
    />
  </Tab.Navigator>
);

export const AppNavigator = () => (
  <NavigationContainer>
    <HomeNavigator />
  </NavigationContainer>
);

const styles = StyleSheet.create({
  tabbarstyle: {
    top: 2,
  },
});
