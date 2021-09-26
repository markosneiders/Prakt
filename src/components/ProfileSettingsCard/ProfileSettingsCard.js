import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

import ProfilePicture from "../ProfilePicture/Index";

function ProfileSettingsCard({ navigation }) {
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("Settings", { screen: "Edit Profile" })
      }
    >
      <View style={styles.container}>
        <ProfilePicture style={styles.card} Width={70} Height={70} />
        <Text style={styles.name}>Name</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "flex-start",
    flexDirection: "row",
    marginVertical: 20,
    paddingHorizontal: 15,
    paddingVertical: 5,
    backgroundColor: "white",
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderTopColor: "lightgray",
    borderBottomColor: "lightgray",
  },
  name: {
    paddingLeft: 8,
    paddingTop: 35,
    fontWeight: "bold",
    fontSize: 18,
  },
  card: {},
});

export default ProfileSettingsCard;
