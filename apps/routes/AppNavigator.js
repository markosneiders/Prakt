import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainScreen from "../screens/MainScreen";
import Profile from "../screens/Profile";
import { Button, StyleSheet } from "react-native";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const HomeNavigator = (props) => (
  <Tab.Navigator>
    <Tab.Screen name="MainScreen" component={MainScreen} />
    <Tab.Screen
     name="Profile"
     component={Profile}
     options={{
     
      headerRight: () => (
        <Button
          onPress={() => alert('This is a button!')}
          title="edit"
        />
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