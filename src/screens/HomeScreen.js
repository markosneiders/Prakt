import React, { useState, useRef, useEffect } from "react";
import data from "../assets/data/data";
import Swiper from "react-native-deck-swiper";
import {
  View,
  StyleSheet,
  Image,
  Text,
  useWindowDimensions,
  TouchableOpacity,
  Button,
  Animated,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";


import TrippleToggleSwitch from "../../node_modules/react-native-triple-state-switch/index.js"
import Icon from 'react-native-vector-icons/Ionicons';
const AnimatedIcon = Animated.createAnimatedComponent(Icon);


const Card = ({ card }) => (
  <View style={styles.card}>
    <Image source={{ uri: card.image }} style={styles.cardImage} />
    <View style={styles.cardTextContainer}>
      <View>
        <Text style={[styles.cardText, { fontSize: 40 }]}>{card.position}</Text>
        <Text style={[styles.cardText, { fontSize: 30 }]}>{card.name}</Text>
        <View style={{ flexDirection: "row" }}>
        {[...Array(5)].map(i => { //Creates the rest of the empty stars
            return(
            <Ionicons
            name="star-outline"
            key={Math.random().toString(36).substr(2, 9)}
            size={30}
            color="yellow"
            style={[styles.stars, { opacity: 0.3 }]}
           />
            );
          })}
          <View style={{position: 'absolute', flexDirection: 'row'}}>
          {[...Array(card.rating)].map(i => { //Creates as many stars as card.rating
            return(
              <Ionicons
              name="star"
              key={Math.random().toString(36).substr(2, 9)}
              size={30}
              color="yellow"
              style={[styles.stars, { opacity: 1 }]}
            />
            );
          })} 
          </View>

        </View>
      </View>
    </View>
    
    <View
      style={[styles.cardTextContainer, { flex: 0.6, alignItems: "flex-end" }]}
    >
      <Text style={[styles.cardText, { fontSize: 30, textAlign: "right" }]}>
        {card.wage + "€"}
      </Text>
      <Text style={[styles.cardText, { fontSize: 30, textAlign: "right" }]}>
        {card.hours + "h"}
      </Text>
      <Text style={[styles.cardText, { fontSize: 25, textAlign: "right" }]}>
        {card.address}
      </Text>
    </View>
  </View>
);

export default function MainScreen() {



  const image1 = useRef(new Animated.Value(1)).current
  const image2 = useRef(new Animated.Value(0)).current
  const opc = useRef(new Animated.Value(0)).current
  const [index, setIndex] = React.useState(0);
  const [aindex, setAindex] = React.useState(0);
  const [bindex, setBindex] = React.useState(1);
  const [swap, setSwap] = React.useState(false);

  const onSwiped = () => {
    setIndex(index + 1);
    {swap == false ? fswap() : tswap()}
    Animated.timing(
      opc,
      {
        toValue: 0,
        duration: 200,
        useNativeDriver: true
      },
    ).start()
  }

    function fswap() {
      Animated.timing(
        image1,
        {
          toValue: 0,
          duration: 500,
          useNativeDriver: true
        },
      ).start()
      Animated.timing(
        image2,
        {
          toValue: 1,
          duration: 500,
          useNativeDriver: true
        },
      ).start(() =>[setAindex(aindex + 2), setSwap(true)]);
      
    };
    function tswap() {
      Animated.timing(
        image1,
        {
          toValue: 1,
          duration: 500,
          useNativeDriver: true
        },
      ).start()
      Animated.timing(
        image2,
        {
          toValue: 0,
          duration: 500,
          useNativeDriver: true
        },
      ).start(() => [setBindex(bindex + 2), setSwap(false)]);
      
    };
    function opacityReset() {
      Animated.timing(
        opc,
        {
          toValue: 0,
          duration: 500,
          useNativeDriver: true
        },
      ).start()
    }
    
 
  return (
    <View style={styles.container}>
      <Animated.View style={[styles.backgroundContainer, {opacity: image1}]} >
        <Image
          source={{ uri: data[aindex].image }}
          blurRadius={3}
          style={[styles.backgroundImage, ]}
          resizeMode="cover"
        />
      </Animated.View>
      <Animated.View style={[styles.backgroundContainer, {opacity: image2}]} >
        <Image
          source={{ uri: data[bindex].image }}
          blurRadius={3}
          style={[styles.backgroundImage, ]}
          resizeMode="cover"
        />
      </Animated.View>
      <Animated.View style={[styles.backgroundContainer, {opacity: opc.interpolate({inputRange: [-300,0], outputRange: [0.5,0]})}]}>
        <Image
          source={{ uri: data[index].image }}
          blurRadius={3}
          style={[styles.backgroundImage,{tintColor: 'red'}]}
          resizeMode="cover"
        />
      </Animated.View>
      <Animated.View style={[styles.backgroundContainer, {opacity: opc.interpolate({inputRange: [0,300], outputRange: [0,0.5]})}]}>
        <Image
          source={{ uri: data[index].image }}
          blurRadius={3}
          style={[styles.backgroundImage,{tintColor: 'green'}]}
          resizeMode="cover"
        />
      </Animated.View>
      <View style={styles.wholebuttoncontainer}>
        <View style={styles.selectbuttoncontainer}>
        <TrippleToggleSwitch
        AnimatedIcon={AnimatedIcon}
        middleStateIconName={'git-network-outline'}
        leftStateIconName={'briefcase'}
        rightStateIconName={'hammer-outline'}
         />
        </View>
      <View >
      <Swiper
        onTapCard={() => console.log("Tap")}
        onSwiping={(cardIndex) => opc.setValue(cardIndex)}
        onSwiped={() => [onSwiped(),opacityReset()]}
        onSwipedAborted={() => opacityReset()}
        cardVerticalMargin={140}
        backgroundColor="transparent"
        cards={data}
        cardIndex={index}
        renderCard={(card) => <Card card={card} />}
        stackSize={5}
        stackScale={9}
        stackSeparation={50}
        disableTopSwipe
        disableBottomSwipe
        animateCardOpacity={true}
      />
      </View>

      

       {/*  <View style={styles.buttoncontainer}>
        <TouchableOpacity>
          <Ionicons
            name="ios-close-circle-outline"
            size={80}
            color={"rgba(255,0,0,0.7)"}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons
            name="md-arrow-back-circle-outline"
            size={80}
            color={"rgba(255,255,255,0.7)"}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons
            name="ios-checkmark-circle-outline"
            size={80}
            color={"rgba(0,255,0,0.7)"}
          />
        </TouchableOpacity>
       </View> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  card: {
    flex: 0.9,
    borderRadius: 8,
    shadowRadius: 25,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowOffset: { width: 0, height: 0 },
    flexDirection: "row",
  },
  cardImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    borderRadius: 8,
    position: "absolute",
  },
  cardText: {
    color: "white",
    // fontFamily: 'Arial',
    fontWeight: "bold",
    shadowOffset: { width: 0, height: 0 },
    shadowColor: "black",
    shadowOpacity: 1,
    shadowRadius: 4,
  },
  cardTextContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-end",
    paddingHorizontal: 5,
    paddingVertical: 25,
  },
  stars: {
    shadowOffset: { width: 0, height: 0 },
    shadowColor: "black",
    shadowOpacity: 1,
    shadowRadius: 4,
    marginHorizontal: 2,
  },
  backgroundContainer: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: "center",
    flex:1
  },
  backgroundImage: {
    alignSelf: "center",
    width: 1000,
    flex: 1,
  },
  buttoncontainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',

    flex: 1,

  },
  wholebuttoncontainer: {
    flex: 1,
    flexDirection: "column",
  },
  selectbuttoncontainer: {
    alignItems: 'center',
    flex: 1,
    marginTop: 40,
    position: 'absolute',
    alignSelf: 'center'
  }
});
