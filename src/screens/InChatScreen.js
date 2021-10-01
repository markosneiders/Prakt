import { Avatar } from "react-native-elements";
import React from "react";
import { useLayoutEffect } from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import { useState } from "react";
import * as firebase from "firebase";
import { db, auth } from "../firebase";

const InChatScreen = ({ navigation, route }) => {
  const [input, setInput] = useState("");

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitleAlign: "left",
      title: "Chat",
      headerBackTitleVisible: false,

      headerTitle: () => (
        <View style={styles.header__info}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Avatar
              rounded
              source={{
                uri: "http://d279m997dpfwgl.cloudfront.net/wp/2020/02/krivak-1-1000x750.jpg",
              }}
            />
            <Text style={{ color: "black", marginLeft: 10, fontWeight: "700" }}>
              {route.params.chatName}
            </Text>
          </View>
        </View>
      ),
    });
  }, [navigation]);

  const sendMessage = () => {
    Keyboard.dismiss();

    db.collection("chats").doc(route.params.id).collection("messages").add({
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      message: input,
      displayName: auth.currentUser.displayName,
      email: auth.currentUser.email,
      // photoURL: auth.currentUser.photoURL
    });

    setInput("");
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar style="auto" />
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
        keyboardVerticalOffset={90}
      >
        <>
          <ScrollView></ScrollView>
          <View style={styles.footer}>
            <TextInput
              value={input}
              onChangeText={(text) => setInput(text)}
              placeholder="Enter a message..."
              style={styles.textInput}
            />
            <TouchableOpacity onPress={sendMessage} activeOpacity={0.5}>
              <Ionicons name="send" size={24} color="#2B68E6" />
            </TouchableOpacity>
          </View>
        </>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default InChatScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  footer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    padding: 15,
  },
  textInput: {
    bottom: 0,
    height: 40,
    flex: 1,
    marginRight: 15,
    backgroundColor: "#ECECEC",
    padding: 10,
    color: "black",
    borderRadius: 30,
  },
});
