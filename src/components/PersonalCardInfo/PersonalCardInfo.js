import React, { useState, useEffect } from "react";

import {
	Text,
	ScrollView,
	Image,
	View,
	StyleSheet,
	TextInput,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import personal_data from "../../assets/data/personal_data.js";
import ImageChooser from "../ImageChooser/Index.js";
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
							personal_data[props.index].image == null
								? require("../../assets/images/TapToAdd.png")
								: { uri: personal_data[props.index].image }
						}
						style={[styles.cardImage]}
					/>
					<View style={styles.cardTextContainer}>
						<View>
							<Text
								style={[styles.cardText, { fontSize: 40, color: "orange" }]}
							>
								{personal_data[props.index].position}
							</Text>
							<Text style={[styles.cardText, { fontSize: 30 }]}>
								{personal_data[props.index].name}
							</Text>
							<Text style={[styles.cardText, { fontSize: 30 }]}>
								{personal_data[props.index].surname}
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
										{[...Array(personal_data[props.index].rating)].map((i) => {
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
							{personal_data[props.index].wage} €/h
						</Text>
						<Text
							style={[styles.cardText, { fontSize: 30, textAlign: "right" }]}
						>
							{personal_data[props.index].hours} h
						</Text>
						<Text
							style={[styles.cardText, { fontSize: 25, textAlign: "right" }]}
						>
							{personal_data[props.index].address}
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
							value={personal_data[props.index].position}
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
							value={personal_data[props.index].position_description}
							onChangeText={(text) => props.setPosition_description(text)}
						/>
					</View>
					<View style={styles.infoline}>
						<Text style={styles.popText}>{"Requirements: "}</Text>
						<TextInput
							style={styles.popBodyText}
							multiline={true}
							editable={props.editable}
							placeholder={"..."}
							value={personal_data[props.index].requirements}
							onChangeText={(text) => props.setRequirements(text)}
						/>
					</View>
					<View style={styles.infoline}>
						<Text style={styles.popText}>{"Pay: "}</Text>
						<View style={{ flexDirection: "row" }}>
							<TextInput
								editable={props.editable}
								style={styles.popBodyText}
								value={personal_data[props.index].wage}
								onChangeText={(text) => props.setWage(text)}
							/>
							<Text style={styles.popBodyText}>€ per hour</Text>
						</View>
						<View style={{ flexDirection: "row" }}>
							<TextInput
								editable={props.editable}
								style={styles.popBodyText}
								value={personal_data[props.index].hours}
							/>
							<Text style={styles.popBodyText}> total hours</Text>
						</View>
					</View>
					<View style={styles.infoline}>
						<Text style={styles.popText}>{"Contact: "}</Text>
						<View style={{ flexDirection: "row" }}>
							<Text style={styles.popSText}>{"Phone: "}</Text>
							<TextInput
								editable={false}
								multiline={true}
								style={styles.popBodyText}
								placeholder={"..."}
								value={personal_data[props.index].phone}
								onChangeText={(text) => props.setPhone(text)}
								keyboardType="phone-pad"
							/>
						</View>
						<View style={{ flexDirection: "row" }}>
							<Text style={styles.popSText}>{"Email: "}</Text>
							<TextInput
								editable={false}
								multiline={true}
								style={styles.popBodyText}
								placeholder={"..."}
								value={personal_data[props.index].email}
								onChangeText={(text) => props.setEmail(text)}
								keyboardType="email-address"
							/>
						</View>
						<View style={{ flexDirection: "row" }}>
							<Text style={styles.popSText}>{"Address: "}</Text>
							<TextInput
								editable={props.editable}
								multiline={true}
								style={styles.popBodyText}
								placeholder={"..."}
								value={personal_data[props.index].address}
								onChangeText={(text) => props.setAddress(text)}
							/>
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
