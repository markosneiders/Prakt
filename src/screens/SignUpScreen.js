import { NavigationContainer } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/core";
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
import { auth } from "../firebase";

const SignUpScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordconf, setPasswordConf] = useState("");

  const signUp = () => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((authUser) => {
        authUser.user;
      })
      .catch((error) => alert(error.message));
  };

  return (
    <ScrollView style={styles.container}>
      <View style={{ justifyContent: "center", alignItems: "center" }}>
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

        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Password Confirmation"
            placeholderTextColor="#003f5c"
            secureTextEntry={true}
            value={passwordconf}
            onChangeText={(passwordconf) => setPasswordConf(passwordconf)}
          />
        </View>

        <TouchableOpacity
          style={styles.signupBtn}
          onPress={signUp}
          disabled={password.length <= 2 || password !== passwordconf}
        >
          <Text
            style={[
              password.length <= 2 || password !== passwordconf
                ? styles.signupTextInvalid
                : styles.signupText,
            ]}
          >
            CREATE ACCOUNT
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
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

  signupText: {
    color: "#000000",
  },

  signupTextInvalid: {
    color: "#999999",
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
