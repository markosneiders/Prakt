import React, { useEffect, useState } from 'react';
import { StyleSheet, ScrollView, Text, Button } from 'react-native';
import BasicTextField from '../components/BasicTextField/Index';
import ProfilePicture from '../components/ProfilePicture/Index';

function Profile({navigation}) {
    const [edit, setedit] = useState(false)
    useEffect(() => {
        navigation.setOptions({
          headerRight: () => (
            <Button onPress={() => setedit(!edit)} title="edit" />
          ),
        });
        }, [edit ,setedit])


    
    
    return(
            <ScrollView contentContainerStyle={styles.container}>
                <ProfilePicture Width={100} Height={100}/>
                <BasicTextField edit = {edit} FieldName={"Name"} FieldContents={"Placeholder Name"}/>
                <BasicTextField edit = {edit} FieldName={"Surname"} FieldContents={"Placeholder Surname"}/>
                <BasicTextField edit = {edit} FieldName={"Email"} FieldContents={"Placeholder Email"}/>
            </ScrollView>

    )
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 40
    },
})


export default Profile;