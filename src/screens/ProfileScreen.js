import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  Alert,
  Pressable,
  TextInput,
} from "react-native";
import BasicTextField from "../components/BasicTextField/Index";
import ProfilePicture from "../components/ProfilePicture/Index";
import ImageChooser from "../components/ImageChooser/Index";

import { Auth, DataStore } from "aws-amplify";
import { User } from "../models";

function ProfileScreen() {
  const [user, setUser] = useState(null);

  const [name, setName] = useState("");
  const [bio, setBio] = useState("");
  const [image, setImage] = useState(); //States to store user data
  const [phone, setPhone] = useState();
  const [email, setEmail] = useState();

  useEffect(() => {
    const getCurrentUser = async () => {
      const user = await Auth.currentAuthenticatedUser();

      const dbUsers = await DataStore.query(
        User,
        (u) => u.sub == user.attributes.sub
      );
      if (dbUsers.length < 0) {
        return;
      }
      const dbUser = dbUsers[0];
      setUser(dbUser);

      setName(dbUser.name);
      setPhone(dbUser.phone);
      setEmail(dbUser.email);
      setBio(dbUser.bio);
    };
    getCurrentUser();
  }, []);

  const isValid = () => {
    return name && phone && email && bio;
  };

  const save = async () => {
    if (!isValid()) {
      Alert.alert("Not Valid");
      return;
    }

    if (user) {
      const updatedUser = User.copyOf(user, (updated) => {
        updated.name = name;
        updated.phone = phone;
        updated.email = email;
        updated.bio = bio;
      });

      await DataStore.save(updatedUser);
    } else {
      // create a new user
      const authUser = await Auth.currentAuthenticatedUser();

      const newUser = new User({
        sub: authUser.attributes.sub,
        name,
        phone,
        email,
        bio,
        image:
          "https://media.istockphoto.com/photos/portrait-of-handsome-latino-african-man-picture-id1007763808?k=20&m=1007763808&s=612x612&w=0&h=q4qlV-99EK1VHePL1-Xon4gpdpK7kz3631XK4Hgr1ls=",
      });
      await DataStore.save(newUser);
    }
    Alert.alert("User Saved Successfully");
  };

  return (
    //Displays profile picture providing with what to display.
    //Calls the image chooser component.
    //Adds our made text input component and passes some props to it to configure.
    //Also passes its respective states for display and update.
    <ScrollView contentContainerStyle={styles.container}>
      <ProfilePicture Width={100} Height={100} image={image} />
      <ImageChooser setimage={setImage} image={image} />
      <View style={styles.textcontainer}>
        {/*<TextInput
          style={styles.input}
          placeholder="Name..."
          value={name}
          onChangeText={setName}
        /> */}
        <BasicTextField
          FieldName={"Name"} 
          text={name}
          setText={setName}
        />
        <TextInput
          keyboardType={"phone-pad"} 
          style={styles.input}
          placeholder="Phone..."
          value={phone}
          onChangeText={setPhone}
        />
        <TextInput
          style={styles.input}
          placeholder="Email..."
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="Bio..."
          multiline
          numberOfLines={3}
          value={bio}
          onChangeText={setBio}
        />
        {/* <BasicTextField
          FieldName={"Name"}
          text={name}
          setText={setName}
        />
        <BasicTextField
          FieldName={"Phone number"}
          value={phone}
          onChangeText={setPhone}
        />
        <BasicTextField
          FieldName={"Email"}
          value={email}
          onChangeText={setEmail}
        />
        <BasicTextField
          FieldName={"Bio"}
          Multi={true}
          value={bio}
          onChangeText={setBio}
        /> */}
      </View>
      <Pressable onPress={save} style={styles.button}>
        <Text>Save</Text>
      </Pressable>
    </ScrollView>
  );
}
//The  image chooser prop passing took a while i hope it was worth it lol.

const styles = StyleSheet.create({
  container: {
    margin: 20,
    marginTop: 0,
  },
  textcontainer: {
    // borderBottomWidth: 1,
    // borderBottomColor: "lightgray",
    // borderTopWidth: 1,
    // borderTopColor: "lightgray",
    padding: 10,
  },
  button: {
    backgroundColor: "#F63A6E",
    height: 25,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    margin: 10,
  },
  input: {
    margin: 10,
    borderBottomColor: "lightgray",
    borderBottomWidth: 1,
  },
});

export default ProfileScreen;
