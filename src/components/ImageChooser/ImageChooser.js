import React, { useEffect, useState } from "react";
import { StyleSheet, TouchableOpacity, Text, View } from "react-native";
import * as ImagePicker from "expo-image-picker";

function ImageChooser(props) {
	const [pic, setpic] = useState(".//");

	useEffect(() => {
		//Requests permision to use gallery
		(async () => {
			if (Platform.OS !== "web") {
				const { status } =
					await ImagePicker.requestMediaLibraryPermissionsAsync();
				if (status !== "granted") {
					alert("Sorry, we need camera roll permissions to make this work!");
				}
			}
		})();
	}, []);

	const pickImage = async (props) => {
		//Opens image picker
		let result = await ImagePicker.launchImageLibraryAsync({
			mediaTypes: ImagePicker.MediaTypeOptions.Images,
			allowsEditing: true,
			aspect: [4, 3],
			quality: 1,
		});
		if (!result.cancelled) {
			//If an image is chosen it assigns it to a temporary variable
			setpic({ localUri: result.uri });
		}
	};

	useEffect(() => {
		props.setimage(pic.localUri); //Updates picture state in Profile.js with the temporary variable
	});

	return (
		//Everything in return is just a button which runs pickImage()
		<TouchableOpacity onPress={() => pickImage()}>
			<Text style={styles.editbutton}>{props.text}</Text>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	editbutton: {
		textAlign: "center",
		fontSize: 15,
		color: "dodgerblue",
		fontWeight: "bold",
		marginBottom: 10,
	},
});

export default ImageChooser;
