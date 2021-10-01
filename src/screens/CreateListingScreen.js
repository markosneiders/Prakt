import React, { useState, useRef, useEffect, useMemo } from "react";
import data from "../assets/data/data";
import Swiper from "react-native-deck-swiper";
import {
	View,
	StyleSheet,
	Image,
	Text,
	Animated,
	ScrollView,
	Button,
	TouchableOpacity,
} from "react-native";
import Modal from "react-native-modal";
import PersonalCardInfo from "../components/EditPersonalCardInfo/EditPersonalCardInfo";
import PersonalCard1 from "../components/EditPersonalCard1/EditPersonalCard1";
import { useSelector } from "react-redux";
export default function MainScreen() {
	const [isModalVisible, setModalVisible] = useState(false);

	const toggleModal = () => {
		setModalVisible(!isModalVisible);
	};
	const image1 = useRef(new Animated.Value(1)).current;
	const opc = useRef(new Animated.Value(0)).current;
	const [index, setIndex] = React.useState(0);

	const listingImage = useSelector((state) => state.listingImage);

	const [position, setPosition] = useState("New job");
	const [name, setName] = useState();
	const [rating, setRating] = useState(0);
	const [wage, setWage] = useState("0");
	const [hours, setHours] = useState("0");
	const [address, setAddress] = useState("");
	const [image, setImage] = useState(listingImage);
	const [position_description, setPosition_description] = useState("");
	const [requirements, setRequirements] = useState("");

	const [localData, setlocalData] = React.useState([
		{
			position: "New job",
			name: "*Profile name*",
			rating: "",
			wage: 0,
			hours: 0,
			address: "",
			image: "",
			position_description: "",
			requirements: "",
			website: "",
			phone: "",
			email: "",
			shift: "",
		},
	]);

	function opacityReset() {
		Animated.timing(opc, {
			toValue: 0,
			duration: 500,
			useNativeDriver: true,
		}).start();
	}

	return (
		<View style={styles.container}>
			<Animated.View
				pointerEvents="none"
				style={[styles.backgroundContainer, { opacity: image1 }]}
			>
				<Image
					source={
						listingImage == null
							? require("../assets/images/TapToAdd.png")
							: { uri: listingImage }
					}
					blurRadius={20}
					style={[styles.backgroundImage]}
					resizeMode="cover"
				/>
			</Animated.View>
			<Animated.View
				pointerEvents="none"
				style={[
					styles.backgroundContainer,
					{
						opacity: opc.interpolate({
							inputRange: [-300, 0],
							outputRange: [0.5, 0],
						}),
					},
				]}
			>
				<Image
					source={{ uri: listingImage }}
					blurRadius={3}
					style={[styles.backgroundImage, { tintColor: "red" }]}
					resizeMode="cover"
				/>
			</Animated.View>
			<Animated.View
				pointerEvents="none"
				style={[
					styles.backgroundContainer,
					{
						opacity: opc.interpolate({
							inputRange: [0, 300],
							outputRange: [0, 0.5],
						}),
					},
				]}
			>
				<Image
					source={{ uri: listingImage }}
					blurRadius={3}
					style={[styles.backgroundImage, { tintColor: "green" }]}
					resizeMode="cover"
				/>
			</Animated.View>
			<View
				style={{
					flex: 0.1,
					marginTop: 300,
					marginHorizontal: 0,
					paddingHorizontal: 0,
				}}
			>
				<Modal
					isVisible={isModalVisible}
					useNativeDriver={true}
					useNativeDriverForBackdrop={true}
					style={{ margin: 0 }}
					onBackdropPress={() => setModalVisible(false)}
				>
					<PersonalCardInfo
						index={index}
						editable={true}
						localData={localData[0]}
						position={position}
						setPosition={setPosition}
						rating={rating}
						setRating={setRating}
						wage={wage}
						setWage={setWage}
						hours={hours}
						setHours={setHours}
						address={address}
						setAddress={setAddress}
						position_description={position_description}
						setPosition_description={setPosition_description}
						requirements={requirements}
						setRequirements={setRequirements}
					/>
				</Modal>
			</View>

			<Swiper
				onTapCard={() => toggleModal()}
				onSwiping={(cardIndex) => opc.setValue(cardIndex)}
				onSwipedAborted={() => opacityReset()}
				cardVerticalMargin={140}
				backgroundColor="transparent"
				cards={localData[0]}
				cardIndex={index}
				renderCard={() => (
					<PersonalCard1
						position={position}
						setPosition={setPosition}
						rating={rating}
						wage={wage}
						hours={hours}
						address={address}
						image={image}
					/>
				)}
				disableTopSwipe
				disableBottomSwipe
				disableLeftSwipe
				disableRightSwipe
				animateCard
				Opacity={true}
			/>
			<View style={{ alignItems: "center", marginTop: 70 }}>
				<TouchableOpacity
					style={{
						backgroundColor: "orange",
						paddingHorizontal: 20,
						paddingVertical: 5,
						borderRadius: 10,
						shadowRadius: 25,
						shadowColor: "#000",
						shadowOpacity: 0.08,
						shadowOffset: { width: 0, height: 0 },
					}}
					onPress={() => console.log("Submit")}
				>
					<Text style={{ color: "white", fontSize: 30 }}>Submit</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: "column-reverse",
		justifyContent: "flex-end",
	},
	backgroundContainer: {
		position: "absolute",
		top: 0,
		bottom: 0,
		left: 0,
		right: 0,
		justifyContent: "center",
	},
	backgroundImage: {
		alignSelf: "center",
		width: 1000,
		flex: 1,
	},
	selectbuttoncontainer: {
		alignItems: "center",
		flex: 1,
		marginTop: 40,
		position: "absolute",
		alignSelf: "center",
	},
});
