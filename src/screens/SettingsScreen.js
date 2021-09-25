import React from "react";
import {ScrollView, StyleSheet} from "react-native";
import ProfileSettingsCard from "../components/ProfileSettingsCard/Index";



function SettingsScreen({navigation}) {
    return(
        <ScrollView style={styles.container}>
            <ProfileSettingsCard navigation={navigation}/>
        </ScrollView>
        
    );
}


const styles = StyleSheet.create({
    container: {
    }
})


export default SettingsScreen;