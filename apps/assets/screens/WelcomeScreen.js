import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, Image, TextInput, Button } from 'react-native';

function WelcomeScreen(props) {

    return (
    <SafeAreaView style={styles.container}>
        <Image style={styles.image} source={require("../Prakt_Logo.png")}/>
        <Text style={styles.title}>PRAKT</Text>
        <TextInput style={[styles.form, {top: 220}]} placeholder="Email"/>
        <TextInput style={[styles.form, {top: 240}]} placeholder="Password"/>
    </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: 'dodgerblue',
        flex: 1,
    },
    image: {
        width: 150,
        height: 150,
        top: 75,
        position: 'absolute',
    },
    title: {
        fontSize: 30,
        top: 190,
    },
    form: {
        width: 260,
        height: 40,
        alignContent: 'center',
        backgroundColor: '#fff',
        borderRadius: 10,
        paddingLeft: 10,
        fontSize: 20,
    },
    button: {
        backgroundColor: 'red',
    }
})
export default WelcomeScreen;