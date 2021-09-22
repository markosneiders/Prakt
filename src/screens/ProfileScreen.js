import React, { useEffect, useState } from "react";
import { StyleSheet, ScrollView,View, Text, Image} from "react-native";
import { TouchableOpacity, TouchableWithoutFeedback } from "react-native-gesture-handler";
import BasicTextField from "../components/BasicTextField/Index";
import ProfilePicture from "../components/ProfilePicture/Index";
import * as ImagePicker from 'expo-image-picker';

function ProfileScreen({ navigation }) {
  //const [edit, setedit] = useState(false);
  //useEffect(() => {
  //  navigation.setOptions({
  //    headerRight: () => <Button onPress={() => setedit(!edit)} title="edit" />,
  //  });
  //}, [edit, setedit]);
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

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <ProfilePicture pic={image.localUri} Width={100} Height={100} />
      <TouchableOpacity onPress={pickImage}>
        <Text style={styles.editbutton}>change profile picture</Text>
      </TouchableOpacity>
        <View style={styles.textcontainer}>
          <BasicTextField FieldName={"Name"} />
          <BasicTextField FieldName={"Surname"} />
          <BasicTextField FieldName={"Email"} />
          <BasicTextField FieldName={"Bio"} Multi={true} />
        </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 20,
    marginTop: 0,
  },
  textcontainer: {
    borderBottomWidth: 1,
    borderBottomColor: "lightgray",
    borderTopWidth: 1,
    borderTopColor: "lightgray"
  },
  editbutton: {
    textAlign: "center",
    fontSize: 15,
    color: "dodgerblue",
    fontWeight: "bold",
    marginBottom: 10,
  }
});

export default ProfileScreen;
