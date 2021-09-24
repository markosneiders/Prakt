import React, { useEffect, useState } from "react";
import { View, Image, StyleSheet, TouchableOpacity, Text } from "react-native";
import * as ImagePicker from 'expo-image-picker';


function ProfilePicture(props) {

  const [image, setImage] = useState(".//");


  return (
    <View style={styles.container}>
      <Image
        source={image.localUri != null ? { uri: image.localUri} : require("../../assets/images/DefaultProfilePic.png")}
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
