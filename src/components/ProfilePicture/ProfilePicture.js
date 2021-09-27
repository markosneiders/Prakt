import React, { useEffect, useState } from "react";
import { View, Image, StyleSheet, TouchableOpacity, Text } from "react-native";

function ProfilePicture(props) {

  return (
    <View style={styles.container}>
      <Image
        source={props.image != ".//" ? { uri: props.image} : require("../../assets/images/DefaultProfilePic.png")} //Determines what to display. Displays what is passed to it as a prop state but if its empty then it displays a default profile picture.
        style={{ width: props.Width, height: props.Height, borderRadius: 100 }} //Uses the height and width props to determine size and border radius makes it round.
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
