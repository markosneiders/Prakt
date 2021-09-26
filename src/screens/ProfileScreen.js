import React, { useEffect, useState, componentWillMount } from "react";
import { StyleSheet, ScrollView,View, Text, Button} from "react-native";
import BasicTextField from "../components/BasicTextField/Index";
import ProfilePicture from "../components/ProfilePicture/Index";
import ImageChooser from "../components/ImageChooser/Index";

import {setname, setsurname, setphone, setemail, setbio} from "../Redux/reducer"
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
function ProfileScreen() {
  const dispatch = useDispatch()

  const profileName = useSelector(state => state.name)
  const profileSurname = useSelector(state => state.surname)
  const profilePhone = useSelector(state => state.phone)
  const profileEmail = useSelector(state => state.email)
  const profileBio = useSelector(state => state.bio)
  
  const [image, setImage] = useState(); //States to store user data
  const [name, setName] = useState(profileName);
  const [surname, setSurname] = useState(profileSurname);
  const [phone, setPhone] = useState(profilePhone); 
  const [email, setEmail] = useState(profileEmail);
  const [bio, setBio] = useState(profileBio);

  return ( //Displays profile picture providing with what to display. 
           //Calls the image chooser component. 
           //Adds our made text input component and passes some props to it to configure. 
           //Also passes its respective states for display and update.
    <ScrollView contentContainerStyle={styles.container}>
      <ProfilePicture Width={100} Height={100} image={image}/> 
      <ImageChooser setimage={setImage} image={image}/> 
        <View style={styles.textcontainer}>
          <BasicTextField FieldName={"Name"} text={name} settext={setName} update={() => dispatch(setname(name))}/> 
          <BasicTextField FieldName={"Surname"} text={surname} settext={setSurname} update={() => dispatch(setsurname(surname))}/>
          <BasicTextField FieldName={"Phone number"} text={phone} settext={setPhone} update={() => dispatch(setphone(phone))}/>
          <BasicTextField FieldName={"Email"} text={email} settext={setEmail} update={() => dispatch(setemail(email))}/>
          <BasicTextField FieldName={"Bio"} Multi={true} text={bio} settext={setBio} update={() => dispatch(setbio(bio))}/>
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
