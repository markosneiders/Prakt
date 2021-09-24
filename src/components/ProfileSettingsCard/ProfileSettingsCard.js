import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import ProfilePicture from '../ProfilePicture/Index';

function ProfileSettingsCard({navigation}) {
    return(
        <TouchableOpacity onPress={() => navigation.navigate("Settings", { screen: "Edit Profile"})}>
        <View style={styles.container}>    
            <ProfilePicture style={styles.card} Width={70} Height={70}/>           
        </View>
        </TouchableOpacity> 
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'flex-start',
        marginVertical: 20,
        paddingHorizontal: 15,
        paddingVertical: 5,
        backgroundColor: "white",
        borderBottomWidth: 1,
        borderTopWidth: 1,
        borderTopColor: "lightgray",
        borderBottomColor: "lightgray",    
    },
    card: {

    }
})

export default ProfileSettingsCard;