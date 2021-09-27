import React from "react";
import {Dimensions, Image,SafeAreaView,StyleSheet, View} from "react-native";

function WelcomeScreen() {

  return (
    <View style={styles.container}>
      <View style={styles.imagecontainer}>
      <Image source={require("../assets/images/prakt-logo.png")}/>
      </View>
      
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    
  },
  imagecontainer: {
    paddingTop: "80%",
  }
});
export default WelcomeScreen;
