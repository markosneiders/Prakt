import React from 'react';
import {TextInput, StyleSheet, Text} from 'react-native';

function BasicTextField(props) {
    return (
        <TextInput style={styles.TextField}>
            <Text style={styles.FieldName}>{props.FieldName}  </Text>
            <Text style={styles.FieldContents}>{props.FieldContents}</Text>
        </TextInput>
    );
}

const styles = StyleSheet.create({
    TextField: {
        backgroundColor: 'lightgray',
        borderRadius: 10,
        paddingHorizontal: 10,
        paddingVertical: 10,
        height: 40,
        fontSize: 20,
    },
    FieldName: {
        color: 'black',
    },
    FieldContents: {
        color: 'gray'
    }
})

export default BasicTextField;