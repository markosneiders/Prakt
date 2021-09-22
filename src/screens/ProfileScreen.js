import React, { useEffect, useState } from "react";
import { StyleSheet, ScrollView, Button, View } from "react-native";
import BasicTextField from "../components/BasicTextField/Index";
import ProfilePicture from "../components/ProfilePicture/Index";

function ProfileScreen({ navigation }) {
  const [edit, setedit] = useState(false);
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => <Button onPress={() => setedit(!edit)} title="edit" />,
    });
  }, [edit, setedit]);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <ProfilePicture Width={100} Height={100} />
      {edit && (
        <View style={{ opacity: "50%" }}>
          <BasicTextField edit={edit} FieldName={"Name"} />
          <BasicTextField edit={edit} FieldName={"Surname"} />
          <BasicTextField edit={edit} FieldName={"Email"} />
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 40,
  },
});

export default ProfileScreen;
