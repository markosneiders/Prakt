import React from "react";
import { Text, View, Image, StyleSheet } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
const PersonalCard1 = (props) => {
	return (
		<View style={styles.card}>
			<Image
				source={
					props.card.image == ""
						? require("../../assets/images/DefaultProfilePic.png")
						: { uri: props.card.image }
				}
				style={styles.cardImage}
			/>
			<View style={styles.cardTextContainer}>
				<View style={{ flex: 1 }}>
					<Text style={[styles.cardText, { fontSize: 40, color: "orange" }]}>
						{props.card.position}
					</Text>
					<Text style={[styles.cardText, { fontSize: 30 }]}>
						{props.card.name}
					</Text>
					{props.card.rating == 0 ? null : (
						<View style={{ flexDirection: "row" }}>
							{[...Array(5)].map((i) => {
								//Creates the rest of the empty stars
								return (
									<Ionicons
										name="star-outline"
										key={Math.random().toString(36).substr(2, 9)}
										size={30}
										color="yellow"
										style={[styles.stars, { opacity: 0.3 }]}
									/>
								);
							})}
							<View style={{ position: "absolute", flexDirection: "row" }}>
								{[...Array(props.card.rating)].map((i) => {
									//Creates as many stars as card.rating
									return (
										<Ionicons
											name="star"
											key={Math.random().toString(36).substr(2, 9)}
											size={30}
											color="yellow"
											style={[styles.stars, { opacity: 1 }]}
										/>
									);
								})}
							</View>
						</View>
					)}
				</View>
			</View>

			<View
				style={[
					styles.cardTextContainer,
					{ flex: 0.6, alignItems: "flex-end" },
				]}
			>
				<Text style={[styles.cardText, { fontSize: 30, textAlign: "right" }]}>
					{props.card.wage == 0 ? "" : props.card.wage + "€/h"}
				</Text>
				<Text style={[styles.cardText, { fontSize: 30, textAlign: "right" }]}>
					{props.card.hours == 0 ? "" : props.card.hours + "h"}
				</Text>
				<Text style={[styles.cardText, { fontSize: 25, textAlign: "right" }]}>
					{props.card.address}
				</Text>
			</View>
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
export default PersonalCard1;
