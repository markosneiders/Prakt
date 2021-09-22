import React from "react";
import { TextInput, StyleSheet, Text, View } from "react-native";

function BasicTextField(props) {
  const [text, onChangeText] = React.useState("Useless Text");

  return (
    <View style={styles.View}>
      <TextInput
        editable={props.edit}
        style={styles.TextField}
        placeholder={props.FieldName}
        onChangeText={onChangeText}
        text={text}
      ></TextInput>
    </View>
  );
}

const styles = StyleSheet.create({
  TextField: {
    backgroundColor: "lightgray",
    borderRadius: 10,
    paddingHorizontal: 10,
    height: 50,
    fontSize: 25,
  },
  FieldName: {
    color: "black",
  },
  FieldContents: {
    color: "gray",
  },
  View: {
    marginTop: 10,
  },
});

export default BasicTextField;
