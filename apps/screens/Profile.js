import React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import BasicTextField from '../components/BasicTextField/Index';

function Profile() {
    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.textContainer}>
            <BasicTextField FieldName={"Name"} FieldContents={"Placeholder Name"}/>
            <BasicTextField FieldName={"Surname"} FieldContents={"Placeholder Surname"}/>
            <BasicTextField FieldName={"Email"} FieldContents={"Placeholder Email"}/>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    textContainer: {
        flex: 1,
        marginHorizontal: 40,
    }
})


export default Profile;