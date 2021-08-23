// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from './apps/assets/screens/WelcomeScreen';

function LogInScreen() {
return <WelcomeScreen/>
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Log In" component={LogInScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;