import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView, Text, StyleSheet } from 'react-native';


function MainScreen() {
const navigation = useNavigation();
    return (
        <SafeAreaView style={styles.container}>
            <Text>Hello World</Text>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default MainScreen;