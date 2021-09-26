import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

function SettingsCard(props) {
    return (
        <TouchableOpacity>
        <View style={styles.container}>
            <View style={[styles.icon, {backgroundColor: props.color}]}> 
                <MaterialCommunityIcons name={props.icon} color="white" size={30}/>
            </View>
            <View style={{flex: 2}}><Text style={styles.text}>{props.title}</Text></View>
            <MaterialCommunityIcons name="chevron-right" size={30} style={{opacity:0.3}}/>
        </View>
        </TouchableOpacity>
    );
}

const styles =  StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: "flex-start",
        flexDirection: 'row',
        paddingHorizontal: 15,
        paddingVertical: 10,
        backgroundColor: "white",
        borderBottomWidth: 1,
        borderTopWidth: 1,
        borderTopColor: "lightgray",
        borderBottomColor: "lightgray",    
    },
    icon: {
        borderRadius: 10,
        width: 35,
        height: 35,
        alignItems: 'center',
        justifyContent: 'center'

    },
    text: {
        fontSize: 17,
        paddingHorizontal: 10,
    }
})

export default SettingsCard;