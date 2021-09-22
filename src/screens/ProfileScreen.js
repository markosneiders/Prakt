import React, { useEffect, useState } from "react";
import { StyleSheet, ScrollView, Button, View, Touchable, Text} from "react-native";
import { TouchableOpacity, TouchableWithoutFeedback } from "react-native-gesture-handler";
import BasicTextField from "../components/BasicTextField/Index";
import ProfilePicture from "../components/ProfilePicture/Index";

function ProfileScreen({ navigation }) {
  //const [edit, setedit] = useState(false);
  //useEffect(() => {
  //  navigation.setOptions({
  //    headerRight: () => <Button onPress={() => setedit(!edit)} title="edit" />,
  //  });
  //}, [edit, setedit]);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <ProfilePicture Width={100} Height={100} />
      <TouchableOpacity>
        <Text style={styles.editbutton}>change profile picture</Text>
      </TouchableOpacity>
        <View style={styles.textcontainer}>
          <BasicTextField FieldName={"Name"} />
          <BasicTextField FieldName={"Surname"} />
          <BasicTextField FieldName={"Email"} />
          <BasicTextField FieldName={"Bio"} />
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
