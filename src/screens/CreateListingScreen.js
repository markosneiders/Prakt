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
} from "react-native";
import Modal from "react-native-modal";
import CardInfo from "../components/CardInfo/CardInfo";
import PersonalCard1 from "../components/PersonalCard1/PersonalCard1";

export default function MainScreen() {
	const [isModalVisible, setModalVisible] = useState(false);

	const toggleModal = () => {
		setModalVisible(!isModalVisible);
	};
	const image1 = useRef(new Animated.Value(1)).current;
	const opc = useRef(new Animated.Value(0)).current;
	const [index, setIndex] = React.useState(0);
	const [aindex, setAindex] = React.useState(0);
	const [localData, setlocalData] = React.useState({
		position: "",
		name: "",
		rating: 0,
		wage: 0,
		hours: 0,
		address: "",
		image: "",
		position_description: "",
		requirements: ["", "", "", "", "", ""],
		website: "",
		phone: "",
		email: "",
		shift: "",
	});

	function opacityReset() {
		Animated.timing(opc, {
			toValue: 0,
			duration: 500,
			useNativeDriver: true,
		}).start();
	}

	return (
		<View style={styles.container}>
			<Animated.View style={[styles.backgroundContainer, { opacity: image1 }]}>
				<Image
					source={
						localData.image == ""
							? require("../assets/images/DefaultProfilePic.png")
							: { uri: localData.image }
					}
					blurRadius={3}
					style={[styles.backgroundImage]}
					resizeMode="cover"
				/>
			</Animated.View>
			<Animated.View
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
					source={{ uri: data[index].image }}
					blurRadius={3}
					style={[styles.backgroundImage, { tintColor: "red" }]}
					resizeMode="cover"
				/>
			</Animated.View>
			<Animated.View
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
					source={{ uri: data[index].image }}
					blurRadius={3}
					style={[styles.backgroundImage, { tintColor: "green" }]}
					resizeMode="cover"
				/>
			</Animated.View>
			<View
				style={{
					flex: 1,
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
					<CardInfo index={index} editable={false} />
				</Modal>
			</View>
			<Swiper
				onTapCard={() => toggleModal()}
				onSwiping={(cardIndex) => opc.setValue(cardIndex)}
				onSwipedAborted={() => opacityReset()}
				cardVerticalMargin={140}
				backgroundColor="transparent"
				cards={localData}
				cardIndex={index}
				renderCard={() => <PersonalCard1 card={localData} />}
				disableTopSwipe
				disableBottomSwipe
				disableLeftSwipe
				disableRightSwipe
				animateCardOpacity={true}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: "column",
	},
	backgroundContainer: {
		position: "absolute",
		top: 0,
		bottom: 0,
		left: 0,
		right: 0,
		justifyContent: "center",
		flex: 1,
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
