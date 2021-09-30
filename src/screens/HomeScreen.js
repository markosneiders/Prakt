import React, { useState, useRef, useEffect } from "react";
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
import Ionicons from "react-native-vector-icons/Ionicons";
import TrippleToggleSwitch from "../../node_modules/react-native-triple-state-switch/index.js";
import Icon from "react-native-vector-icons/Ionicons";
import Modal from "react-native-modal";
import CardInfo from "../components/CardInfo/CardInfo";
import Card1 from "../components/Card1/Index.js";
const AnimatedIcon = Animated.createAnimatedComponent(Icon);

const Card = ({ card }) => <Card1 card={card} />;

export default function MainScreen() {
	const [isModalVisible, setModalVisible] = useState(false);

	const toggleModal = () => {
		setModalVisible(!isModalVisible);
	};
	const image1 = useRef(new Animated.Value(1)).current;
	const image2 = useRef(new Animated.Value(0)).current;
	const opc = useRef(new Animated.Value(0)).current;
	const [index, setIndex] = React.useState(0);
	const [aindex, setAindex] = React.useState(0);
	const [bindex, setBindex] = React.useState(1);
	const [swap, setSwap] = React.useState(false);

	const onSwiped = () => {
		setIndex(index + 1);
		{
			swap == false ? fswap() : tswap();
		}
		Animated.timing(opc, {
			toValue: 0,
			duration: 200,
			useNativeDriver: true,
		}).start();
	};

	function fswap() {
		Animated.timing(image1, {
			toValue: 0,
			duration: 500,
			useNativeDriver: true,
		}).start();
		Animated.timing(image2, {
			toValue: 1,
			duration: 500,
			useNativeDriver: true,
		}).start(() => [setAindex(aindex + 2), setSwap(true)]);
	}
	function tswap() {
		Animated.timing(image1, {
			toValue: 1,
			duration: 500,
			useNativeDriver: true,
		}).start();
		Animated.timing(image2, {
			toValue: 0,
			duration: 500,
			useNativeDriver: true,
		}).start(() => [setBindex(bindex + 2), setSwap(false)]);
	}
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
					source={{ uri: data[aindex].image }}
					blurRadius={3}
					style={[styles.backgroundImage]}
					resizeMode="cover"
				/>
			</Animated.View>
			<Animated.View style={[styles.backgroundContainer, { opacity: image2 }]}>
				<Image
					source={{ uri: data[bindex].image }}
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
					<CardInfo index={index} />
				</Modal>
			</View>
			<Swiper
				onTapCard={() => toggleModal()}
				onSwiping={(cardIndex) => opc.setValue(cardIndex)}
				onSwiped={() => [onSwiped(), opacityReset()]}
				onSwipedAborted={() => opacityReset()}
				cardVerticalMargin={140}
				backgroundColor="transparent"
				cards={data}
				cardIndex={index}
				renderCard={(card) => <Card card={card} />}
				stackSize={5}
				stackScale={9}
				stackSeparation={50}
				disableTopSwipe
				disableBottomSwipe
				animateCardOpacity={true}
			/>
			<View style={styles.selectbuttoncontainer}>
				<TrippleToggleSwitch
					AnimatedIcon={AnimatedIcon}
					middleStateIconName={"git-network-outline"}
					leftStateIconName={"briefcase"}
					rightStateIconName={"hammer-outline"}
				/>
			</View>
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
