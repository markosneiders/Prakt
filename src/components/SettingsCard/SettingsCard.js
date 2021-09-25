import React from 'react';
import { StyleSheet, View } from 'react-native';

import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

function SettingsCard(props) {
    return (
        <View style={styles.container}>
            <MaterialCommunityIcons name="crosshairs-gps" size={30}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white'
    }
})

export default SettingsCard;