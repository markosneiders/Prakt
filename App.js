import  React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import WelcomeScreen from './apps/assets/screens/WelcomeScreen';
import MainScreen from './apps/assets/screens/MainScreen';
import Profile from './apps/assets/screens/Profile';
import SignIn from './apps/assets/screens/SignIn';
import SignUp from './apps/assets/screens/SignUp';

function LogInScreen() {return <WelcomeScreen/>}
function PrimaryScreen() {return <MainScreen/>}

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function LogInScreen1(){
  return (
  <Stack.Navigator>
      <Stack.Screen name="Log In" component={LogInScreen} options={{headerShown: false}}/>
  </Stack.Navigator>
  )
}
function PrimaryScreen1(){
  return(
  <Tab.Navigator>
    <Tab.Screen name="Primary Screen" component={PrimaryScreen}/>
    <Tab.Screen name="Profile" component={Profile}/>
  </Tab.Navigator>
  )
}

function App() {

  return (
         <NavigationContainer>
      <Stack.Navigator>
          <Stack.Screen name="Log In1" component={LogInScreen1} options={{headerShown: false}}/>
          <Stack.Screen name="PrimaryScreen" component={PrimaryScreen1} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>

  );
}

export default App;