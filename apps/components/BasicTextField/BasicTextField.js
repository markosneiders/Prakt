import React, {useState} from 'react';
import {TextInput, StyleSheet, Text, View} from 'react-native';

function BasicTextField(props) {
    const [edit, setedit] = useState(false);
    return (
        <View style={styles.View}>
        <TextInput editable={edit} style={styles.TextField}>
            <Text style={styles.FieldName}>{props.FieldName}  </Text>
            <Text style={styles.FieldContents}>{props.FieldContents}</Text>
        </TextInput>
        </View>
    );
}

const styles = StyleSheet.create({
    TextField: {
        backgroundColor: 'lightgray',
        borderRadius: 10,
        paddingHorizontal: 10,
        height: 50,
        fontSize: 25,
    },
    FieldName: {
        color: 'black',
    },
    FieldContents: {
        color: 'gray'
    },
    View: {
        marginTop: 10,
        
    }
})

export default BasicTextField;