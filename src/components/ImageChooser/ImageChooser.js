import React, { useEffect, useState } from "react";
import {StyleSheet, TouchableOpacity, Text } from "react-native";
import * as ImagePicker from 'expo-image-picker';


function ImageChooser (props) {
    const [image, setImage] = useState(".//");

  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.cancelled) {
      setImage({ localUri: result.uri });
    }
  };

  return(
    <TouchableOpacity onPress={pickImage}>
    <Text style={styles.editbutton}>change profile picture</Text>
  </TouchableOpacity>
  )
}


const styles = StyleSheet.create({
    editbutton: {
    textAlign: "center",
    fontSize: 15,
    color: "dodgerblue",
    fontWeight: "bold",
    marginBottom: 10,
    }
})

export default ImageChooser;