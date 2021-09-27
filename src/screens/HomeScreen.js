import React, { useState } from "react";


import data from "../assets/data/data";
import Swiper from "react-native-deck-swiper";
import { View, StyleSheet, Image, Text, useWindowDimensions} from "react-native";
import { ImageResizeMode } from "react-native";


const Card =({card}) => (
    <View style={styles.card}>
        <Image source={{uri: card.image}} style={styles.cardImage}/>
    </View>
);

export default function MainScreen() {

    const window = useWindowDimensions();
    const [index, setIndex] = React.useState(0);
    return(
        
        <View style={styles.container} >
            <View style={styles.backgroundContainer}>
            <Image source={require("../assets/images/Maxima.jpg")}  blurRadius={3} style={styles.backgroundImage} resizeMode="cover"/>
            </View>
            <Swiper 
            backgroundColor="transparent"
            cards={data}
            cardIndex={index}
            renderCard={(card) => <Card card = {card}/>}
            stackSize={5}
            stackScale={20}
            stackSeparation={20}
            disableTopSwipe
            disableBottomSwipe
            />
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,  
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#FFF",
    },
    card: {
        flex: 0.5,
        borderRadius: 8,
        shadowRadius: 25,
        shadowColor: "#000",
        shadowOpacity: 0.08,
        shadowOffset: {width: 0, height: 0},
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff"
    },
    cardImage: {
         width: 160,
         flex: 1,
         resizeMode: "contain",
    },
    backgroundContainer: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        justifyContent: "center",
        backgroundColor: "green"
      },
    backgroundImage: {
        alignSelf:"center",
        width: 1000,
        flex: 1,
    }
})
