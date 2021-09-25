import React from "react";
import { ScrollView, StyleSheet, Pressable, Text } from "react-native";
import ProfileSettingsCard from "../components/ProfileSettingsCard/Index";
import { Auth } from "aws-amplify";

function SettingsScreen({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      <ProfileSettingsCard navigation={navigation} />
      <Pressable onPress={() => Auth.signOut()} style={styles.button}>
        <Text>Sign out</Text>
      </Pressable>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {},
  button: {
    backgroundColor: "#34a9c9",
    height: 25,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    margin: 10,
  },
});

export default SettingsScreen;
