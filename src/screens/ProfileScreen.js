import React, { useState } from "react";
import { StyleSheet, ScrollView,View, Text} from "react-native";
import BasicTextField from "../components/BasicTextField/Index";
import ProfilePicture from "../components/ProfilePicture/Index";
import ImageChooser from "../components/ImageChooser/Index";


function ProfileScreen() {

  
  const [image, setImage] = useState(); //States to store user data
  const [name, setName] = useState();
  const [surname, setSurname] = useState();
  const [phone, setPhone] = useState(); 
  const [email, setEmail] = useState();
  const [bio, setBio] = useState();


  return ( //Displays profile picture providing with what to display. 
           //Calls the image chooser component. 
           //Adds our made text input component and passes some props to it to configure. 
           //Also passes its respective states for display and update.
    <ScrollView contentContainerStyle={styles.container}>
      <ProfilePicture Width={100} Height={100} image={image}/> 
      <ImageChooser setimage={setImage} image={image}/> 
        <View style={styles.textcontainer}>
          <BasicTextField FieldName={"Name"} text={name} settext={setName}/> 
          <BasicTextField FieldName={"Surname"} text={surname} settext={setSurname}/>
          <BasicTextField FieldName={"Phone number"} text={phone} settext={setPhone}/>
          <BasicTextField FieldName={"Email"} text={email} settext={setEmail}/>
          <BasicTextField FieldName={"Bio"} Multi={true} text={bio} settext={setBio}/>
        </View>
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
    borderBottomWidth: 1,
    borderBottomColor: "lightgray",
    borderTopWidth: 1,
    borderTopColor: "lightgray"
  },
});

export default ProfileScreen;
