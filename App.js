import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import WelcomeScreen from './apps/assets/screens/WelcomeScreen';
import MainScreen from './apps/assets/screens/MainScreen';

function LogInScreen() {
return <WelcomeScreen/>
}
function PrimaryScreen() {
  return <MainScreen/>
  }

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LogInScreen">
        <Stack.Screen name="Log In" component={LogInScreen} options={{headerShown: false}}/>
        <Stack.Screen name="PrimaryScreen" component={PrimaryScreen} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;