import React from "react";
import { View, Image, StyleSheet } from "react-native";

function ProfilePicture(props) {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/images/DefaultProfilePic.png")}
        style={{ width: props.Width, height: props.Height, borderRadius: 100 }}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    margin: 10,
  },
});

export default ProfilePicture;
