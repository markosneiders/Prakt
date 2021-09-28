import React, { useState } from "react";
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
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

const Card = ({ card }) => (
  <View style={styles.card}>
    <Image source={{ uri: card.image }} style={styles.cardImage} />
    <View style={styles.cardTextContainer}>
      <View>
        <Text style={[styles.cardText, { fontSize: 40 }]}>{card.position}</Text>
        <Text style={[styles.cardText, { fontSize: 30 }]}>{card.name}</Text>
        <View style={{ flexDirection: "row" }}>
          <Ionicons
            name="star"
            size={30}
            color="yellow"
            style={[styles.stars, { opacity: 0.8 }]}
          />
          <Ionicons
            name="star"
            size={30}
            color="yellow"
            style={[styles.stars, { opacity: 0.8 }]}
          />
          <Ionicons
            name="star"
            size={30}
            color="yellow"
            style={[styles.stars, { opacity: 0.8 }]}
          />
          <Ionicons
            name="star"
            size={30}
            color="yellow"
            style={[styles.stars, { opacity: 0.8 }]}
          />
          <Ionicons
            name="star-outline"
            size={30}
            color="yellow"
            style={[styles.stars, { opacity: 0.3 }]}
          />
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
  const window = useWindowDimensions();
  const [index, setIndex] = React.useState(0);
  const [op, setOp] = React.useState(0);
  const onSwiped = () => {
    setIndex(index + 1);
  };
  return (
    <View style={styles.container}>
      <View style={styles.backgroundContainer}>
        <Image
          source={{ uri: data[index].image }}
          blurRadius={3}
          style={[styles.backgroundImage]}
          resizeMode="cover"
        />
      </View>
      <View style={{ marginTop: 60 }}>
        <Button title="Change mode" />
      </View>
      <View style={{ flex: 1 }} />
      <View style={styles.buttoncontainer}>
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
      </View>
      <Swiper
        onSwiping={(cardIndex) => setOp(cardIndex)}
        cardVerticalMargin={140}
        backgroundColor="transparent"
        cards={data}
        cardIndex={index}
        renderCard={(card) => <Card card={card} />}
        stackSize={5}
        stackScale={10}
        stackSeparation={40}
        disableTopSwipe
        disableBottomSwipe
        onSwiped={onSwiped}
        overlayLabels={{
          left: {
            title: "NOPE",
            style: {
              label: {
                backgroundColor: "black",
                borderColor: "black",
                color: "white",
                borderWidth: 1,
              },
              wrapper: {
                flexDirection: "column",
                alignItems: "flex-end",
                justifyContent: "flex-start",
                marginTop: 30,
                marginLeft: -30,
              },
            },
          },
        }}
        animateOverlayLabelsOpacity={true}
        animateCardOpacity={true}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
    flex: 0.7,
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
  },
  backgroundImage: {
    alignSelf: "center",
    width: 1000,
    flex: 1,
  },
  buttoncontainer: {
    flexDirection: "row",
    marginBottom: 40,
    justifyContent: "center",
  },
});
