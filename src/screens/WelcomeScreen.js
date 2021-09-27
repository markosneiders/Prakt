import React, { Component, useRef } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  Image,
  View,
  Button,
} from "react-native";
import {
  TouchableHighlight,
  TouchableOpacity,
} from "react-native-gesture-handler";
import { Icon, SocialIcon } from "react-native-elements";
import Ionicons from "react-native-vector-icons/Ionicons";
import { render } from "react-dom";

const WelcomeScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require("../assets/prakt-logo.png")}
      />
      <TouchableOpacity onPress={() => console.warn("real nigga shit google")}>
        {/* sign in w google */}
        <View style={[styles.button, { backgroundColor: "white" }]}>
          <SocialIcon type="google" style={[{ marginLeft: 15 }]} />
          <Text
            style={[
              styles.buttonText,
              { color: "black" },
              { fontWeight: "bold" },
            ]}
          >
            Continue with Google
          </Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => console.warn("real nigga shit email")}>
        {/* sign in w email */}
        <View style={[styles.button, { backgroundColor: "#2fb3ff" }]}>
          <Ionicons name="mail" size={60} style={[{ marginLeft: 15 }]} />
          <Text
            style={[
              styles.buttonText,
              { color: "black" },
              { fontWeight: "bold" },
            ]}
          >
            Continue with email
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    alignItems: "center",
  },
  button: {
    marginBottom: 30,
    width: 360,
    alignItems: "center",
    backgroundColor: "#2196F3",
    flexDirection: "row",
    borderRadius: 10,
  },
  buttonText: {
    textAlign: "center",
    padding: 20,
    color: "white",
    paddingLeft: 42,
    paddingRight: 42,
  },
  icon: {
    marginLeft: 15,
  },
  image: {
    borderRadius: 10,
    width: 150,
    height: 150,
    marginBottom: 100,
    alignItems: "center",
    justifyContent: "center",
  },
  fadingContainer: {
    padding: 20,
    backgroundColor: "powderblue",
  },
  imagecontainer: {
    paddingTop: "80%",
  }
});

export default WelcomeScreen;
