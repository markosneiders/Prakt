import React, { useEffect } from "react";
import { Text, View, Image, StyleSheet } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useSelector } from "react-redux";
const ShowPersonalCard1 = (props) => {
	const listingImage = useSelector((state) => state.listingImage);
	const profileName = useSelector((state) => state.name);
	const profileSurname = useSelector((state) => state.surname);

	useEffect(() => {}, [listingImage]);
	return (
		<View style={styles.card}>
			<Text>{props.card.hours}</Text>
		</View>
	);
};
const styles = StyleSheet.create({
	card: {
		flex: 1,
		borderRadius: 8,
		shadowRadius: 25,
		shadowColor: "#000",
		shadowOpacity: 0.08,
		shadowOffset: { width: 0, height: 0 },
		flexDirection: "column",
	},
	cardImage: {
		width: "100%",
		height: "100%",
		resizeMode: "cover",
		borderRadius: 8,
		position: "absolute",
	},
	cardText: {
		color: "white",
		// fontFamily: 'Arial',
		fontWeight: "bold",
		shadowOffset: { width: 0, height: 0 },
		shadowColor: "black",
		shadowOpacity: 1,
		shadowRadius: 4,
	},
	cardTextContainer: {
		flex: 1,
		flexDirection: "column",
		justifyContent: "flex-end",
		paddingHorizontal: 5,
		paddingVertical: 10,
	},
	stars: {
		shadowOffset: { width: 0, height: 0 },
		shadowColor: "black",
		shadowOpacity: 1,
		shadowRadius: 4,
		marginHorizontal: 2,
	},
});
export default ShowPersonalCard1;
