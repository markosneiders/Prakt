import React from "react";
import { View, StyleSheet } from "react-native";
import Card from "../components/TinderCard/TinderCard";
import users from "../assets/data/users";

import AnimatedStack from "../components/AnimatedStack/AnimatedStack";

const ROTATION = 60;
const SWIPE_VELOCITY = 800;

const HomeScreen = () => {
  const onSwipeLeft = (user) => {
    console.warn("swipe left: ", user.name);
  };

  const onSwipeRight = (user) => {
    console.warn("swipe right: ", user.name);
  };

  return (
    <View style={styles.pageContainer}>
      <AnimatedStack
        data={users}
        renderItem={({ item }) => <Card user={item} />}
        onSwipeLeft={onSwipeLeft}
        onSwipeRight={onSwipeRight}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  pageContainer: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    width: "100%",
  },
});

export default HomeScreen;


