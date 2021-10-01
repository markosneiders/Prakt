import { triggerFocus } from "antd/lib/input/Input";
import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { auth } from "../firebase";

function IntroScreen({ navigation }) {
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        navigation.replace("app_home");
      }
    });
    return unsubscribe;
  }, []);

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require("../assets/images/prakt-logo.png")}
      />
      <View styles={styles.forgot_button}>
        <Text>Praktify - jobs made simple</Text>
      </View>

      <View style={styles.textView}>
        <Text style={styles.textStyle}>
          With a flick of a card you're one step closer to getting a real job
          without leaving the comfort of your home.
        </Text>
      </View>

      <TouchableOpacity
        style={styles.loginBtn}
        onPress={() => navigation.navigate("login")}
      >
        <Text style={styles.loginText}>SIGN IN</Text>
      </TouchableOpacity>
    </View>
  );
}

export default IntroScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  image: {
    top: 0,
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

  forgot_button: {
    height: 30,
    marginBottom: 5,
  },

  textView: {
    margin: 20,
  },
  textStyle: {
    textAlign: "center",
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
