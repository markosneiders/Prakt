import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import BasicTextField from '../components/BasicTextField/Index';
import ProfilePicture from '../components/ProfilePicture/Index';

function Profile(props) {
    return(
            <ScrollView contentContainerStyle={styles.container}>
                <ProfilePicture Width={100} Height={100}/>
                <BasicTextField FieldName={"Name"} FieldContents={"Placeholder Name"}/>
                <BasicTextField FieldName={"Surname"} FieldContents={"Placeholder Surname"}/>
                <BasicTextField FieldName={"Email"} FieldContents={"Placeholder Email"}/>
            </ScrollView>

    )
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 40
    },
})


export default Profile;