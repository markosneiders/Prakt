import React, { useState } from 'react';
import { StyleSheet, ScrollView, Text, Button } from 'react-native';
import BasicTextField from '../components/BasicTextField/Index';
import ProfilePicture from '../components/ProfilePicture/Index';

function Profile(props) {
    const [edit, setedit] = useState("False")
    return(
            <ScrollView contentContainerStyle={styles.container}>
                <ProfilePicture Width={100} Height={100}/>
                <BasicTextField edits ={edit} FieldName={"Name"} FieldContents={"Placeholder Name"}/>
                <BasicTextField edits ={edit} FieldName={"Surname"} FieldContents={"Placeholder Surname"}/>
                <BasicTextField edits ={edit} FieldName={"Email"} FieldContents={"Placeholder Email"}/>
                <Text>{edit}</Text>
                <Button  onPress={() => setedit("True")}
                title ="edit"/>
            </ScrollView>

    )
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 40
    },
})


export default Profile;