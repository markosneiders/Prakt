import React, { useState } from "react";
import { ScrollView, StyleSheet, Pressable, Text, Button, Alert } from "react-native";

import ProfileSettingsCard from "../components/ProfileSettingsCard/Index";
import SettingsCard from "../components/SettingsCard/Index";
import { TouchableOpacity } from "react-native-gesture-handler";


import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';


import {increment} from "../Redux/reducer"
import {decrement} from "../Redux/reducer"
import {reset} from "../Redux/reducer"


function SettingsScreen({ navigation }) {
  
  const dispatch = useDispatch()

  const counter = useSelector(state => state.counter)

  return (
    <ScrollView style={styles.container}>
      <ProfileSettingsCard navigation={navigation} />
      <SettingsCard icon={"crosshairs-gps"} color={"lightgreen"} title={"Search settings"} navigation={navigation}/>
      <TouchableOpacity style={styles.signOutTouchable} onPress={() => handleSignOut()}>
        <Text style={styles.signOutText}>Sign Out</Text>
      </TouchableOpacity>
      <Text style={{fontSize: 30}}>{counter}</Text>
      <Button title="Inc" onPress={() => dispatch(increment())}/>
      <Button title="Dec" onPress={() => dispatch(decrement())}/>
      <Button title="Reset" onPress={() => dispatch(reset())}/>
    </ScrollView>
  );
}

function handleSignOut() {
  Alert.alert(
    "Sign out?",
     "You will have to log back in to use the app.",
     [
      {text: "Cancel", style: "cancel"},
      { 
        text: "Sign out",
        onPress: () => console.log("Sign out"),
      style: "destructive" }
    ]
     )
}

const styles = StyleSheet.create({
  container: {},
  signOutTouchable: {
    paddingVertical: 30,
    alignItems: 'center',
  },
  signOutText: {
    color: 'red',
    fontSize: 18,
  }
});

export default SettingsScreen;