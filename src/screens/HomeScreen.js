import React, { useState } from "react";


import data from "../assets/data/data";
import Swiper from "react-native-deck-swiper";
import { View, StyleSheet, Image, Text, useWindowDimensions, TouchableOpacity} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
const Card =({card}) => (
    <View style={styles.card}>
        <Image source={{uri: card.image}} style={styles.cardImage}/>
    </View>
);
export default function MainScreen() {
    const window = useWindowDimensions();
    const [index, setIndex] = React.useState(0);
    const onSwiped = () => {
        setIndex(index+1)
    }
    return(
        
        <View style={styles.container} >
            <View style={styles.backgroundContainer}>
            <Image source={{uri: (data[index]).image}}  blurRadius={3} style={styles.backgroundImage} resizeMode="cover"/>
            </View>
            <Swiper
            backgroundColor="transparent"
            cards={data}
            cardIndex={index}
            renderCard={(card) => <Card card = {card}/>}
            stackSize={4}
            stackScale={10}
            stackSeparation={35}
            disableTopSwipe
            disableBottomSwipe
            onSwiped={onSwiped}
            />
            <View  style={styles.buttoncontainer}>
            <TouchableOpacity><Ionicons name="ios-close-circle-outline" size={80} color={'rgba(255,0,0,0.7)'}/></TouchableOpacity>
            <TouchableOpacity><Ionicons name="md-arrow-back-circle-outline" size={80} color={'rgba(255,255,255,0.7)'} /></TouchableOpacity> 
            <TouchableOpacity><Ionicons name="ios-checkmark-circle-outline" size={80} color={'rgba(0,255,0,0.7)'}/></TouchableOpacity>
            </View>
  
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,  
        alignItems: "center",
        justifyContent: "flex-end",
        backgroundColor: "#FFF",
    },
    card: {
        flex: 0.7,
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
      },
    backgroundImage: {
        alignSelf:"center",
        width: 1000,
        flex: 1,
    },
    buttoncontainer: {
        flexDirection: "row",
        marginBottom: 40,
    }
})
