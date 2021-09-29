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
import { auth } from "../firebase";

const SignUpScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signUp = () => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((authUser) => {
        authUser.user;
      })
      .catch((error) => alert(error.message));
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require("../assets/images/prakt-logo.png")}
      />

      <StatusBar style="auto" />
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email"
          placeholderTextColor="#003f5c"
          secureTextEntry={false}
          value={email}
          onChangeText={(email) => setEmail(email)}
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password"
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          value={password}
          onChangeText={(password) => setPassword(password)}
        />
      </View>

      <TouchableOpacity style={styles.signupBtn} onPress={signUp}>
        <Text style={styles.loginText}>CREATE ACCOUNT</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  image: {
    marginTop: 40,
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
    marginBottom: 5,
  },

  signupBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    marginTop: 30,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#7CB8EA",
  },
});
