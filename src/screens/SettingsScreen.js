import React, { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Pressable,
  Text,
  Button,
  Alert,
  ActionSheetIOS,
} from "react-native";
import { Auth } from "aws-amplify";

import ProfileSettingsCard from "../components/ProfileSettingsCard/Index";
import SettingsCard from "../components/SettingsCard/Index";
import { TouchableOpacity } from "react-native-gesture-handler";

function SettingsScreen({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      <ProfileSettingsCard navigation={navigation} />
      <SettingsCard
        icon={"crosshairs-gps"}
        color={"olive"}
        title={"Search settings"}
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
      onPress: () => Auth.signOut(),
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
