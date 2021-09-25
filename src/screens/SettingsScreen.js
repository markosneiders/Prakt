import React from "react";
import { ScrollView, StyleSheet, Pressable, Text, Button, Alert } from "react-native";
import { Auth } from "aws-amplify";

import ProfileSettingsCard from "../components/ProfileSettingsCard/Index";
import SettingsCard from "../components/SettingsCard/Index";

function SettingsScreen({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      <ProfileSettingsCard navigation={navigation} />
      <Button title="Sign Out" onPress={() => handleSignOut()} color="red"/>
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
        onPress: () => Auth.signOut(),
      style: "destructive" }
    ]
     )
}

const styles = StyleSheet.create({
  container: {},
});

export default SettingsScreen;
