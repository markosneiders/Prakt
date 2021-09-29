import { triggerFocus } from "antd/lib/input/Input";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  StatusBar,
} from "react-native";

function WelcomeBusiness({ navigation }) {
  const [compname, setCompName] = useState("");

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require("../../assets/images/prakt-logo.png")}
      />

      <StatusBar style="auto" />

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Company name"
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(compname) => setCompName(compname)}
          value={compname}
        />
      </View>

      <TouchableOpacity style={styles.loginBtn}>
        <Text style={styles.loginText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
}

export default WelcomeBusiness;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
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
