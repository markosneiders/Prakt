import React, { useMemo } from "react";
import data from "../../assets/data/data.js";
import {
	Text,
	ScrollView,
	Image,
	View,
	StyleSheet,
	TextInput,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
const CardInfo = (props) => {
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
						source={{ uri: data[props.index].image }}
						style={[styles.cardImage]}
					/>
					<View style={styles.cardTextContainer}>
						<View>
							<Text style={[styles.cardText, { fontSize: 40 }]}>
								{data[props.index].position}
							</Text>
							<Text style={[styles.cardText, { fontSize: 30 }]}>
								{data[props.index].name}
							</Text>
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
									{[...Array(data[props.index].rating)].map((i) => {
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
							{data[props.index].wage + "€"}
						</Text>
						<Text
							style={[styles.cardText, { fontSize: 30, textAlign: "right" }]}
						>
							{data[props.index].hours + "h"}
						</Text>
						<Text
							style={[styles.cardText, { fontSize: 25, textAlign: "right" }]}
						>
							{data[props.index].address}
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
						>
							{data[props.index].position}
						</TextInput>
					</View>
					<View style={styles.infoline}>
						<Text style={styles.popText}>{"Position description: "}</Text>
						<TextInput style={styles.popBodyText} multiline={true}>
							{data[props.index].position_description}
						</TextInput>
					</View>
					<View style={styles.infoline}>
						<Text style={styles.popText}>{"Requirments: "}</Text>
						{[...Array(data[props.index].requirements.length)].map((i, x) => {
							//Renders requirements
							return (
								<View
									key={Math.random().toString(36).substr(2, 9)}
									style={{ flexDirection: "row" }}
								>
									<Text style={[styles.popBodyText, { fontSize: 26 }]}>-</Text>
									<TextInput multiline={true} style={styles.popBodyText}>
										{data[props.index].requirements[x]}
									</TextInput>
								</View>
							);
						})}
					</View>
					<View style={styles.infoline}>
						<Text style={styles.popText}>{"Shifts: "}</Text>
						<View style={{ flexDirection: "row" }}>
							<TextInput style={styles.popBodyText}>
								{data[props.index].hours}
							</TextInput>
							<Text style={styles.popBodyText}> hour shifts</Text>
						</View>
						<TextInput multiline={true} style={styles.popBodyText}>
							{data[props.index].shift + " shift"}
						</TextInput>
					</View>
					<View style={styles.infoline}>
						<Text style={styles.popText}>{"Wage: "}</Text>
						<View style={{ flexDirection: "row" }}>
							<TextInput style={styles.popBodyText}>
								{data[props.index].wage}
							</TextInput>
							<Text style={styles.popBodyText}>€ monthly wage</Text>
						</View>
					</View>
					<View style={styles.infoline}>
						<Text style={styles.popText}>{"Contact: "}</Text>
						<View style={{ flexDirection: "row" }}>
							<Text style={styles.popSText}>{"Website: "}</Text>
							<TextInput multiline={true} style={styles.popBodyText}>
								{data[props.index].website}
							</TextInput>
						</View>
						<View style={{ flexDirection: "row" }}>
							<Text style={styles.popSText}>{"Phone: "}</Text>
							<TextInput multiline={true} style={styles.popBodyText}>
								{data[props.index].phone}
							</TextInput>
						</View>
						<View style={{ flexDirection: "row" }}>
							<Text style={styles.popSText}>{"Email: "}</Text>
							<TextInput multiline={true} style={styles.popBodyText}>
								{data[props.index].email}
							</TextInput>
						</View>
						<View style={{ flexDirection: "row" }}>
							<Text style={styles.popSText}>{"Adress: "}</Text>
							<TextInput multiline={true} style={styles.popBodyText}>
								{data[props.index].address}
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
		color: "dodgerblue",
		fontWeight: "bold",
	},
	popSText: {
		fontSize: 20,
		color: "dodgerblue",
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
export default CardInfo;
