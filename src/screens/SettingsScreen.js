import React, { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Pressable,
  Text,
  Button,
  Alert,
} from "react-native";

import ProfileSettingsCard from "../components/ProfileSettingsCard/Index";
import SettingsCard from "../components/SettingsCard/Index";
import { TouchableOpacity } from "react-native-gesture-handler";

function SettingsScreen({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      <ProfileSettingsCard navigation={navigation} />
      <SettingsCard
        icon={"crosshairs-gps"}
        color={"lightgreen"}
        title={"Search settings"}
        navigation={navigation}
      />
      <TouchableOpacity
        style={styles.signOutTouchable}
        onPress={() => handleSignOut()}
      >
        <Text style={styles.signOutText}>Sign Out</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

function handleSignOut() {
  Alert.alert("Sign out?", "You will have to log back in to use the app.", [
    { text: "Cancel", style: "cancel" },
    {
      text: "Sign out",
      onPress: () => console.log("Sign out"),
      style: "destructive",
    },
  ]);
}

const styles = StyleSheet.create({
  container: {},
  signOutTouchable: {
    paddingVertical: 30,
    alignItems: "center",
  },
  signOutText: {
    color: "red",
    fontSize: 18,
  },
});

export default SettingsScreen;
