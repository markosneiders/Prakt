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

const EditPersonalCardInfo = (props) => {
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
							props.image == ""
								? require("../../assets/images/DefaultProfilePic.png")
								: { uri: props.image }
						}
						style={[styles.cardImage]}
					/>
					<View style={styles.cardTextContainer}>
						<View>
							<Text
								style={[styles.cardText, { fontSize: 40, color: "orange" }]}
							>
								{props.position}
							</Text>
							<Text style={[styles.cardText, { fontSize: 30 }]}>
								{props.name}
							</Text>
							{props.rating == 0 ? null : (
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
										{[...Array(props.rating)].map((i) => {
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
							{props.wage == 0 ? "" : props.wage + "€"}
						</Text>
						<Text
							style={[styles.cardText, { fontSize: 30, textAlign: "right" }]}
						>
							{props.hours == 0 ? "" : props.hours + "h"}
						</Text>
						<Text
							style={[styles.cardText, { fontSize: 25, textAlign: "right" }]}
						>
							{props.address}
						</Text>
					</View>
				</View>
				<View style={{ marginHorizontal: 8, marginTop: 15, marginBottom: 220 }}>
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
							value={props.position}
							multiline={true}
							onChangeText={(text) => props.setPosition(text)}
						/>
					</View>
					<View style={styles.infoline}>
						<Text style={styles.popText}>{"Job description: "}</Text>
						<TextInput
							style={styles.popBodyText}
							multiline={true}
							editable={props.editable}
							placeholder={"..."}
							value={props.position_description}
							onChangeText={(text) => props.setPosition_description(text)}
						/>
					</View>
					<View style={styles.infoline}>
						<Text style={styles.popText}>{"Requirments: "}</Text>
						{[...Array(props.requirements.length)].map((i, x) => {
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
									/>
								</View>
							);
						})}
					</View>
					<View style={styles.infoline}>
						<Text style={styles.popText}>{"Pay: "}</Text>
						<View style={{ flexDirection: "row" }}>
							<TextInput
								editable={props.editable}
								style={styles.popBodyText}
								value={props.wage}
								onChangeText={(text) => props.setWage(text)}
							/>
							<Text style={styles.popBodyText}>€ per hour</Text>
						</View>
						<View style={{ flexDirection: "row" }}>
							<TextInput
								editable={props.editable}
								style={styles.popBodyText}
								value={props.hours}
								onChangeText={(text) => props.setHours(text)}
							/>
							<Text style={styles.popBodyText}> total hours</Text>
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
								value={props.phone}
								onChangeText={(text) => props.setPhone(text)}
								keyboardType="phone-pad"
							/>
						</View>
						<View style={{ flexDirection: "row" }}>
							<Text style={styles.popSText}>{"Email: "}</Text>
							<TextInput
								editable={props.editable}
								multiline={true}
								style={styles.popBodyText}
								placeholder={"..."}
								value={props.email}
								onChangeText={(text) => props.setEmail(text)}
								keyboardType="email-address"
							/>
						</View>
						<View style={{ flexDirection: "row" }}>
							<Text style={styles.popSText}>{"Adress: "}</Text>
							<TextInput
								editable={props.editable}
								multiline={true}
								style={styles.popBodyText}
								placeholder={"..."}
							>
								{props.address}
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
export default EditPersonalCardInfo;