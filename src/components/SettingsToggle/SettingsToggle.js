import React from "react";

import { Text, StyleSheet, TouchableOpacity, View } from "react-native";
import { Switch } from "react-native-gesture-handler";
import { useState } from "react";

import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

function SettingsToggle(props) {
  const toggleSwitch = () =>
    props.setIsEnabled((previousState) => !previousState);
  return (
    <View style={styles.container}>
      <View style={{ flex: 2 }}>
        <Text style={styles.text}>{props.title}</Text>
      </View>
      <Switch
        trackColor={{ false: "lightgray", true: "dodgerblue" }}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={props.isEnabled}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: "row",
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: "white",
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderTopColor: "lightgray",
    borderBottomColor: "lightgray",
  },
  text: {
    fontSize: 17,
    paddingHorizontal: 10,
  },
});

export default SettingsToggle;
