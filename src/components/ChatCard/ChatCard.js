import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Avatar } from "react-native-elements";
import users from "../../assets/data/users";

const ChatCard = () => {
  return (
    <View style={styles.chat}>
      <Avatar
        rounded
        source={{
          uri: users[1].image,
        }}
      />
      <View style={styles.chat__info}>
        <Text>Marko</Text>
        <Text>How are you</Text>
      </View>
    </View>
  );
};

export default ChatCard;

const styles = StyleSheet.create({
  chat: {
    backgroundColor: "red",
    flexDirection: "row",
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#f6f6f6",
  },
  chat__info: {
    marginLeft: 15,
  },
});
