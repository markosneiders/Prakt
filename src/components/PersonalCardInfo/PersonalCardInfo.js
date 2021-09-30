import React, { useState } from "react";

import {
	Text,
	ScrollView,
	Image,
	View,
	StyleSheet,
	TextInput,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
const [temp, settemp] = React.useState([
	{
		position: "New job",
		name: "*Profile name*",
		rating: 0,
		wage: 0,
		hours: 0,
		address: "",
		image: "",
		position_description: "",
		requirements: [""],
		website: "",
		phone: "",
		email: "",
		shift: "",
	},
]);
const PersonalCardInfo = (props) => {
	return (
		<ScrollView
			style={{
				flex: 1,
				marginHorizontal: 25,
				marginVertical: 150,
				backgroundColor: "white",
				borderRadius: 8,
			}}
		>
			<View>
				<View style={[styles.card]}>
					<Image
						source={
							props.localData.image == ""
								? require("../../assets/images/DefaultProfilePic.png")
								: { uri: props.localData.image }
						}
						style={[styles.cardImage]}
					/>
					<View style={styles.cardTextContainer}>
						<View>
							<Text
								style={[styles.cardText, { fontSize: 40, color: "orange" }]}
							>
								{props.localData.position}
							</Text>
							<Text style={[styles.cardText, { fontSize: 30 }]}>
								{props.localData.name}
							</Text>
							{props.localData.rating == 0 ? null : (
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
										{[...Array(props.localData.rating)].map((i) => {
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
						<Text
							style={[styles.cardText, { fontSize: 30, textAlign: "right" }]}
						>
							{props.localData.wage == 0 ? "" : props.localData.wage + "€"}
						</Text>
						<Text
							style={[styles.cardText, { fontSize: 30, textAlign: "right" }]}
						>
							{props.localData.hours == 0 ? "" : props.localData.hours + "h"}
						</Text>
						<Text
							style={[styles.cardText, { fontSize: 25, textAlign: "right" }]}
						>
							{props.localData.address}
						</Text>
					</View>
				</View>
				<View style={{ marginHorizontal: 8, marginTop: 15, marginBottom: 100 }}>
					<View
						style={{
							borderBottomWidth: 2,
							borderBottomColor: "lightgray",
							top: -2,
						}}
					>
						<TextInput
							editable={props.editable}
							style={[styles.popText, { fontSize: 40 }]}
							value={props.localData.position}
						/>
					</View>
					<View style={styles.infoline}>
						<Text style={styles.popText}>{"Job description: "}</Text>
						<TextInput
							style={styles.popBodyText}
							multiline={true}
							editable={props.editable}
							placeholder={"..."}
						>
							{props.localData.position_description}
						</TextInput>
					</View>
					<View style={styles.infoline}>
						<Text style={styles.popText}>{"Requirments: "}</Text>
						{[...Array(props.localData.requirements.length)].map((i, x) => {
							//Renders requirements
							return (
								<View
									key={Math.random().toString(36).substr(2, 9)}
									style={{ flexDirection: "row" }}
								>
									<Text style={[styles.popBodyText, { fontSize: 26 }]}>-</Text>
									<TextInput
										multiline={true}
										style={styles.popBodyText}
										editable={props.editable}
										placeholder={"..."}
									>
										{props.localData.requirements[x]}
									</TextInput>
								</View>
							);
						})}
					</View>
					<View style={styles.infoline}>
						<Text style={styles.popText}>{"Pay: "}</Text>
						<View style={{ flexDirection: "row" }}>
							<TextInput
								editable={props.editable}
								placeholder={"..."}
								style={styles.popBodyText}
							>
								{props.localData.wage}
							</TextInput>
							<Text style={styles.popBodyText}>€ per hour</Text>
						</View>
						<View style={{ flexDirection: "row" }}>
							<TextInput
								editable={props.editable}
								placeholder={"..."}
								style={styles.popBodyText}
							>
								{props.localData.hours}
							</TextInput>
							<Text style={styles.popBodyText}> total hours</Text>
						</View>
						<View style={{ flexDirection: "row" }}>
							<Text style={styles.popBodyText}>
								={props.localData.hours * props.localData.wage} € total
							</Text>
						</View>
					</View>
					<View style={styles.infoline}>
						<Text style={styles.popText}>{"Contact: "}</Text>
						<View style={{ flexDirection: "row" }}>
							<Text style={styles.popSText}>{"Phone: "}</Text>
							<TextInput
								editable={props.editable}
								multiline={true}
								style={styles.popBodyText}
								placeholder={"..."}
							>
								{props.localData.phone}
							</TextInput>
						</View>
						<View style={{ flexDirection: "row" }}>
							<Text style={styles.popSText}>{"Email: "}</Text>
							<TextInput
								editable={props.editable}
								multiline={true}
								style={styles.popBodyText}
								placeholder={"..."}
							>
								{props.localData.email}
							</TextInput>
						</View>
						<View style={{ flexDirection: "row" }}>
							<Text style={styles.popSText}>{"Adress: "}</Text>
							<TextInput
								editable={props.editable}
								multiline={true}
								style={styles.popBodyText}
								placeholder={"..."}
							>
								{props.localData.address}
							</TextInput>
						</View>
					</View>
				</View>
			</View>
		</ScrollView>
	);
};
const styles = StyleSheet.create({
	popText: {
		fontSize: 30,
		color: "orange",
		fontWeight: "bold",
	},
	popSText: {
		fontSize: 20,
		color: "orange",
		fontWeight: "bold",
		top: 5,
	},
	popBodyText: {
		fontSize: 20,
		color: "gray",
	},
	infoline: {
		borderTopWidth: 2,
		borderTopColor: "lightgray",
		marginBottom: 20,
	},
	card: {
		flex: 0.9,
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
export default PersonalCardInfo;
