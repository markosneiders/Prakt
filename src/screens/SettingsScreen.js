import React, { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Pressable,
  Text,
  Button,
  Alert,
} from "react-native";

import { auth } from "../firebase";

import ProfileSettingsCard from "../components/ProfileSettingsCard/Index";
import SettingsCard from "../components/SettingsCard/Index";
import { TouchableOpacity } from "react-native-gesture-handler";

function SettingsScreen({ navigation }) {
  function handleSignOut() {
    Alert.alert("Sign out?", "You will have to log back in to use the app.", [
      { text: "Cancel", style: "cancel" },
      {
        text: "Sign out",
        onPress: () =>
          auth
            .signOut()
            .then(() => {
              navigation.replace("login");
            })
            .catch((error) => alert(error.message)),
        style: "destructive",
      },
    ]);
  }

  return (
    <ScrollView style={styles.container}>
      <ProfileSettingsCard navigation={navigation} />
      <SettingsCard
        screen={"Search settings"}
        icon={"crosshairs-gps"}
        color={"lightblue"}
        title={"Search settings"}
        navigation={navigation}
      />
      <SettingsCard
        screen={"Theme"}
        icon={"brush"}
        color={"lightblue"}
        title={"Theme"}
        navigation={navigation}
      />
      <SettingsCard
        screen={"About"}
        icon={"alpha-i-circle-outline"}
        color={"lightblue"}
        title={"About"}
        navigation={navigation}
      />
      <SettingsCard
        screen={"Help"}
        icon={"apple-finder"}
        color={"lightblue"}
        title={"Help"}
        navigation={navigation}
      />
      <SettingsCard
        screen={"Privacy"}
        icon={"book-lock"}
        color={"lightblue"}
        title={"Privacy"}
        navigation={navigation}
      />
      <SettingsCard
        screen={"Security"}
        icon={"shield-account"}
        color={"lightblue"}
        title={"Security"}
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
