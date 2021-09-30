import React, { useState } from "react";
import {
	StyleSheet,
	Text,
	View,
	Image,
	TextInput,
	TouchableOpacity,
	StatusBar,
	ScrollView,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import RNDateTimePicker from "@react-native-community/datetimepicker";

function WelcomePersonal({ navigation }) {
	const [name, setName] = useState("");
	const [surname, setSurname] = useState("");
	const [date, setDate] = useState(new Date(1598051730000));
	const [mode, setMode] = useState("date");
	const [show, setShow] = useState(false);
	const [phone, setPhone] = useState("");
	const [bio, setBio] = useState("");

	const showMode = (currentMode) => {
		setShow(true);
		setMode(currentMode);
	};

	const showDatepicker = () => {
		showMode("date");
	};

	return (
		<ScrollView style={styles.container}>
			<View style={{ justifyContent: "center", alignItems: "center" }}>
				<Image
					style={styles.image}
					source={require("../../assets/images/prakt-logo.png")}
				/>

				<StatusBar style="auto" />
				<View style={styles.inputView}>
					<TextInput
						style={styles.TextInput}
						placeholder="Name"
						placeholderTextColor="#003f5c"
						secureTextEntry={false}
						onChangeText={(name) => setName(name)}
					/>
				</View>

				<View style={styles.inputView}>
					<TextInput
						style={styles.TextInput}
						placeholder="Surname"
						placeholderTextColor="#003f5c"
						secureTextEntry={false}
						onChangeText={(surname) => setSurname(surname)}
						value={surname}
					/>
				</View>
				<View style={styles.inputView}>
					<TextInput
						style={styles.TextInput}
						placeholder="Phone number"
						placeholderTextColor="#003f5c"
						secureTextEntry={false}
						onChangeText={(phone) => setPhone(phone)}
						value={phone}
					/>
				</View>
				<View style={styles.inputView}>
					<TextInput
						style={styles.TextInput}
						placeholder="Bio"
						placeholderTextColor="#003f5c"
						secureTextEntry={false}
						onChangeText={(bio) => setBio(bio)}
						value={bio}
					/>
				</View>
				<View style={styles.dateView}>
					<Text style={{ paddingHorizontal: 20 }}>Birthdate</Text>
					<RNDateTimePicker
						style={styles.dateInput}
						value={new Date()}
						maximumDate={new Date(2100, 0, 1)}
						minimumDate={new Date(190, 0, 1)}
					/>
				</View>

				<TouchableOpacity
					style={styles.loginBtn}
					onPress={() => navigation.navigate("Home")}
				>
					<Text style={styles.loginText}>SUBMIT</Text>
				</TouchableOpacity>
			</View>
		</ScrollView>
	);
}

export default WelcomePersonal;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
	},

	image: {
		marginBottom: 40,
	},

	inputView: {
		borderWidth: 1,
		backgroundColor: "#f0efeb",
		borderRadius: 30,
		width: "70%",
		height: 45,
		marginBottom: 20,
	},
	dateView: {
		borderWidth: 1,
		backgroundColor: "#f0efeb",
		borderRadius: 30,
		width: "70%",
		marginBottom: 20,
		flexDirection: "row",
		alignItems: "center",
	},
	dateInput: {
		marginVertical: 10,
		width: 100,
		alignSelf: "center",
	},

	TextInput: {
		height: 50,
		flex: 1,
		paddingHorizontal: 20,
	},

	forgot_button: {
		height: 30,
		marginBottom: 30,
	},

	loginBtn: {
		width: "80%",
		borderRadius: 25,
		height: 50,
		alignItems: "center",
		justifyContent: "center",
		marginTop: 40,
		backgroundColor: "#7CB8EA",
	},
});
