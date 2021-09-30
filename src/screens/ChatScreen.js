import React, { useLayoutEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Avatar } from "react-native-elements";
import { auth } from "../firebase";

import CustomListItem from "../components/CustomListItem/CustomListItem";

const ChatScreen = ({ navigation }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTintStyle: { color: "black" },
      headerTintColor: "black",
      headerLeft: () => (
        <View style={{ marginLeft: 20 }}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Settings");
            }}
          >
            <Avatar
              rounded
              title="ms"
              source={{
                // uri: auth?.currentUser?.photoURL,
                uri: "http://d279m997dpfwgl.cloudfront.net/wp/2020/02/krivak-1-1000x750.jpg",
              }}
            />
          </TouchableOpacity>
        </View>
      ),
    });
  });

  return (
    <SafeAreaView>
      <ScrollView>
        <CustomListItem />
      </ScrollView>
    </SafeAreaView>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({});
