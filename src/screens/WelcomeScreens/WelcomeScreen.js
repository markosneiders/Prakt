import React, { Component, useRef, useState, useEffect } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  Image,
  View,
  Button,
  Animated,
} from "react-native";
import {
  TouchableHighlight,
  TouchableOpacity,
} from "react-native-gesture-handler";
import { Icon, SocialIcon } from "react-native-elements";
import Ionicons from "react-native-vector-icons/Ionicons";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WelcomeUse from "./WelcomeUse";

function WelcomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.backgroundContainer}>
        <Image
          source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }}
          blurRadius={0.4}
          style={styles.backgroundImage}
          resizeMode="cover"
        />
      </View>

      <Image
        style={[styles.image, { bottom: 110 }]}
        source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }}
      />
      <View style={styles.titleTextView}>
        <Text style={styles.titleText}>Praktify</Text>
      </View>
      <View style={styles.bottomTextView}>
        <Text style={styles.bottomText}>
          Jobs left and right, all you need to do is sign up for our premium
          package.
        </Text>
        <TouchableOpacity
          onPress={() => navigation.navigate("Welcome Use")}
          style={[styles.button, { marginTop: 50 }]}
        >
          <Text
            style={[
              styles.buttonText,
              { color: "black" },
              { fontWeight: "bold" },
              { textAlign: "center" },
            ]}
          >
            Get started
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 230,
    alignItems: "center",
  },
  button: {
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
  buttonContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    marginLeft: 15,
  },
  image: {
    width: 240,
    height: 240,
    marginBottom: 100,
    alignItems: "center",
    justifyContent: "center",
  },
  imagecontainer: {
    paddingTop: "80%",
  },
  backgroundContainer: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: "center",
    backgroundColor: "green",
  },
  backgroundImage: {
    alignSelf: "center",
    width: 400,
    height: 400,
    flex: 1,
  },
  titleText: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#313131",
    textAlign: "center",
  },
  titleTextView: {
    bottom: 150,
    justifyContent: "center",
    alignItems: "center",
  },
  bottomText: {
    fontSize: 20,
    textAlign: "center",
  },
  bottomTextView: {
    bottom: 140,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default WelcomeScreen;
