//import react
import React from "react";
//importing react componments
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet } from "react-native";

//importing screens for navigator to use
import HomeScreen from "../screens/HomeScreen";
import MatchesScreen from "../screens/MatchesScreen";
import SettingsScreen from "../screens/SettingsScreen";
import WelcomeScreen from "../screens/WelcomeScreens/WelcomeScreen";
import WelcomeUse from "../screens/WelcomeScreens/WelcomeUse";
import LoginScreen from "../screens/LoginScreen";
import SignUpScreen from "../screens/SignUpScreen";
import WelcomePersonal from "../screens/WelcomeScreens/WelcomePersonal";
import CreateListingScreen from "../screens/CreateListingScreen";
import ChatScreen from "../screens/ChatScreen";
import IntroScreen from "../screens/IntroScreen";

import ProfileScreen from "../screens/ProfileScreen"; // more screen imports
import SearchSettings from "../screens/SearchSettings";
import SettingsDropdown from "../components/SettingsDropdown/SettingsDropdown";

//Imports for custom icons
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Fontisto from "react-native-vector-icons/Fontisto";
import Ionicons from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";
import Entypo from "react-native-vector-icons/Entypo";
import InChatScreen from "../screens/InChatScreen";

//defining variable for ease of reading
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator(); //defining variable for ease of reading again

// Main tab navigator containing home matches and settings
function AuthNavigator() {
	return (
		<Stack.Navigator>
			<Stack.Screen
				name="intro"
				component={IntroScreen}
				options={{
					headerShown: false,
				}}
			/>
			<Stack.Screen
				name="login"
				component={LoginScreen}
				options={{
					headerShown: false,
				}}
			/>
			<Stack.Screen
				name="signUp"
				component={SignUpScreen}
				options={{
					headerShown: false,
				}}
			/>
			<Stack.Screen
				name="app_home"
				component={HomeNavigator}
				options={{
					headerShown: false,
				}}
			/>
		</Stack.Navigator>
	);
}

function HomeNavigator() {
	return (
		<Tab.Navigator initialRouteName="Home">
			<Tab.Screen //Chat screen
				name="Chats"
				component={ChatNavigator}
				options={{
					headerShown: null,
					tabBarIcon: () => (
						<Entypo name="chat" size={30} style={styles.tabbarstyle} />
					),
				}}
			/>
			<Tab.Screen // Home screen
				name="Home" //Screen name
				component={HomeScreen} //What screen to navigate to
				options={{
					//Options
					headerShown: null, //If the header is shown
					tabBarIcon: () => (
						//Tab bar icon options
						<Fontisto name="home" size={30} style={styles.tabbarstyle} />
					),
				}}
			/>
			<Tab.Screen // Home screen
				name="Create listing" //Screen name
				component={CreateListingScreen} //What screen to navigate to
				options={{
					//Options
					headerShown: null, //If the header is shown
					tabBarIcon: () => (
						//Tab bar icon options
						<Ionicons name="create" size={30} style={styles.tabbarstyle} />
					),
				}}
			/>

			<Tab.Screen //Settings screen
				name="Settings"
				component={SettingsNavigator} //Instead of a screen we pass another navigator for settings so we can navigate inside settings pages
				options={{
					headerShown: null,
					tabBarIcon: () => (
						<FontAwesome name="user" size={30} style={styles.tabbarstyle} />
					),
				}}
			/>
		</Tab.Navigator>
	);
}

function ChatNavigator() {
	return (
		<Stack.Navigator>
			<Stack.Screen name="Direct Messages" component={ChatScreen} />
			<Stack.Screen
				name="Chat"
				component={InChatScreen}
				navigationOptions={{
					headerBackTitle: "back",
				}}
			/>
		</Stack.Navigator>
	);
}

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
			<Stack.Screen
				name="Search Radius settings"
				component={SettingsDropdown}
			/>
		</Stack.Navigator>
	);
}

function WelcomeNavigator() {
	return (
		<Stack.Navigator>
			<Stack.Screen
				name="Welcome Page"
				component={WelcomeUse}
				options={{ title: "Welcome" }}
			/>
			<Stack.Screen name="Welcome Personal" component={WelcomePersonal} />
			<Stack.Screen name="Home" component={HomeScreen} />
			<Stack.Screen name="Login Screen" component={LoginScreen} />
			<Stack.Screen name="Signup Screen" component={SignUpScreen} />
		</Stack.Navigator>
	);
}

export const AppNavigator = () => (
	//Exports navigator to be imported in App.js
	<NavigationContainer>
		<AuthNavigator />
	</NavigationContainer>
);

const styles = StyleSheet.create({
	//Style sheet
	tabbarstyle: {
		//Style which is applied to all tab navigator icons to style them easily
		top: 2,
	},
});
