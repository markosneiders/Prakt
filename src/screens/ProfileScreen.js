import React, { useEffect, useState } from "react";
import {
	StyleSheet,
	ScrollView,
	View,
	KeyboardAvoidingView,
} from "react-native";
import BasicTextField from "../components/BasicTextField/Index";
import ProfilePicture from "../components/ProfilePicture/Index";
import ImageChooser from "../components/ImageChooser/Index";

import {
	setprofilename,
	setprofilesurname,
	setprofilephone,
	setprofileemail,
	setprofilebio,
	setprofileimage,
} from "../Redux/reducer";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
function ProfileScreen() {
	const dispatch = useDispatch();

	const profileName = useSelector((state) => state.name);
	const profileSurname = useSelector((state) => state.surname);
	const profilePhone = useSelector((state) => state.phone);
	const profileEmail = useSelector((state) => state.email);
	const profileBio = useSelector((state) => state.bio);
	const profileImage = useSelector((state) => state.image);

	const [name, setName] = useState(profileName);
	const [surname, setSurname] = useState(profileSurname);
	const [phone, setPhone] = useState(profilePhone);
	const [email, setEmail] = useState(profileEmail);
	const [birth, setBirth] = useState();
	const [bio, setBio] = useState(profileBio);
	const [image, setImage] = useState(profileImage); //States to store user data

	//useEffect triggers when the state image changes
	useEffect(() => {
		image != null ? dispatch(setprofileimage(image)) : null; //Dispatches the image state
	}, [image]);
	return (
		//Displays profile picture providing with what to display.
		//Calls the image chooser component.
		//Adds our made text input component and passes some props to it to configure.
		//Also passes its respective states for display and update.
		<ScrollView contentContainerStyle={styles.container}>
			<ProfilePicture Width={100} Height={100} image={profileImage} />
			<ImageChooser
				setimage={setImage}
				image={image}
				text={"change profile picture"}
			/>
			<KeyboardAvoidingView style={styles.textcontainer}>
				<BasicTextField
					FieldName={"Name"}
					text={name}
					settext={setName}
					update={() => dispatch(setprofilename(name))}
				/>
				<BasicTextField
					FieldName={"Surname"}
					text={surname}
					settext={setSurname}
					update={() => dispatch(setprofilesurname(surname))}
				/>
				<BasicTextField
					FieldName={"Phone number"}
					text={phone}
					settext={setPhone}
					type={"phone-pad"}
					update={() => dispatch(setprofilephone(phone))}
				/>
				<BasicTextField
					FieldName={"Email"}
					text={email}
					settext={setEmail}
					type={"email-address"}
					update={() => dispatch(setprofileemail(email))}
				/>
				<BasicTextField
					FieldName={"Birth date"}
					text={birth}
					settext={setBirth}
				/>
				<BasicTextField
					FieldName={"Bio"}
					Multi={true}
					text={bio}
					settext={setBio}
					update={() => dispatch(setprofilebio(bio))}
				/>
			</KeyboardAvoidingView>
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
		borderTopColor: "lightgray",
	},
});

export default ProfileScreen;
