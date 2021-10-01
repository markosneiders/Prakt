import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { auth } from "../../firebase";

import ProfilePicture from "../ProfilePicture/Index";

import { useSelector } from "react-redux";

function ProfileSettingsCard({ navigation }) {
	const profileImage = useSelector((state) => state.image);
	const profileBio = useSelector((state) => state.bio);
	const profileName = useSelector((state) => state.name);
	const profileSurname = useSelector((state) => state.surname);
	return (
		<TouchableOpacity
			onPress={() =>
				navigation.navigate("Settings", { screen: "Edit Profile" })
			}
		>
			<View style={styles.container}>
				<ProfilePicture
					style={styles.card}
					Width={70}
					Height={70}
					image={profileImage}
				/>
				<View style={styles.textcontainer}>
					<Text style={styles.titletext}>{auth.currentUser.displayName}</Text>
					<Text numberOfLines={5} style={styles.bodytext}>
						{profileBio}
					</Text>
				</View>
			</View>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	container: {
		alignItems: "center",
		flexDirection: "row",
		marginVertical: 20,
		paddingHorizontal: 15,
		paddingVertical: 5,
		backgroundColor: "white",
		borderBottomWidth: 1,
		borderTopWidth: 1,
		borderTopColor: "lightgray",
		borderBottomColor: "lightgray",
	},
	textcontainer: {
		alignItems: "flex-start",
	},
	titletext: {
		paddingTop: 15,
		paddingLeft: 7,
		fontSize: 30,
		fontWeight: "500",
	},
	bodytext: {
		color: "gray",
		marginRight: 110,
		textAlign: "justify",
	},
});

export default ProfileSettingsCard;
