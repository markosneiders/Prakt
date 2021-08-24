import  React, {useState} from 'react';
import { View, Text, SafeAreaView, Pressable } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import WelcomeScreen from './apps/assets/screens/WelcomeScreen';
import MainScreen from './apps/assets/screens/MainScreen';

function LogInScreen() {
return <WelcomeScreen/>
}
function PrimaryScreen() {
  return <MainScreen/>
  }

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();


function App() {
  const[userToken, setUserToken] = useState();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {userToken==null ? (
          <>
          <Stack.Screen name="Log In" component={LogInScreen}/>
          </>
        ) : (
          <>
           <Stack.Screen name="PrimaryScreen" component={PrimaryScreen}/>
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;