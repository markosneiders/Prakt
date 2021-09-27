//import react
import React from "react";
//importing react componments
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AnimatedTabBarNavigator } from "react-native-animated-nav-tab-bar";
import { StyleSheet } from "react-native";

//importing screens for navigator to use
import HomeScreen from "../screens/HomeScreen";
import MatchesScreen from "../screens/MatchesScreen";
import SettingsScreen from "../screens/SettingsScreen";

//Imports for custom icons
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Fontisto from "react-native-vector-icons/Fontisto";
import Ionicons from "react-native-vector-icons/Ionicons";


//defining variable for ease of reading
const Tab = createBottomTabNavigator();

// Main tab navigator containing home matches and settings
function HomeNavigator() {
  return (
    <Tab.Navigator >
      <Tab.Screen // Home screen
        name="Home" //Screen name
        component={HomeScreen} //What screen to navigate to
        options={{
          //Options
          headerShown: null, //If the header is shown
          tabBarIcon: () => (
            //Tab bar icon options
            <Fontisto name="home" size={25} style={styles.tabbarstyle} />
          ),
        }}
      />
      <Tab.Screen //Matches/Chat screen
        name="Matches"
        component={MatchesScreen}
        options={{
          tabBarIcon: () => (
            <Ionicons
              name="ios-chatbubbles"
              size={25}
              style={styles.tabbarstyle}
            />
          ),
        }}
      />

      <Tab.Screen //Settings screen
        name="Settings"
        component={SettingsNavigator} //Instead of a screen we pass another navigator for settings so we can navigate inside settings pages
        options={{
          headerShown: null,
          tabBarIcon: () => (
            <FontAwesome name="user" size={25} style={styles.tabbarstyle} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

import ProfileScreen from "../screens/ProfileScreen"; // more screen imports
import SearchSettings from "../screens/SearchSettings";

const Stack = createNativeStackNavigator(); //defining variable for ease of reading again

function SettingsNavigator() {
  // Settings navigator using stack instead of tab (Stack means the screens appear on top of eachother without a tab bar only back buttons)
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Settings page"
        component={SettingsScreen}
        options={{ title: "Settings" }}
      />
      <Stack.Screen name="Edit Profile" component={ProfileScreen} />
      <Stack.Screen name="Search settings" component={SearchSettings} />
    </Stack.Navigator>
  );
}


export const AppNavigator = () => (
  //Exports navigator to be imported in App.js
  <NavigationContainer>
    <HomeNavigator />
  </NavigationContainer>
);

const styles = StyleSheet.create({
  //Style sheet
  tabbarstyle: {
    //Style which is applied to all tab navigator icons to style them easily
    top: 2,
  },
});
