import React from "react";
import { TextInput, StyleSheet, Text, View } from "react-native";

function BasicTextField(props) {
  const [text, onChangeText] = React.useState("Useless Text");

  return (
    
    //<View style={styles.View}>
    //  <TextInput
    //    editable={props.edit}
    //    style={styles.TextField}
    //    placeholder={props.FieldName}
    //    onChangeText={onChangeText}
    //    text={text}
    //  ></TextInput>
    //</View>

    <View style={styles.View}>
      <View style={{flex:1, justifyContent: "center", alignItems: "flex-start"}}>
      <Text style={{fontSize: 17}}>{props.FieldName}</Text>
      </View>
      <View style={{flex: 3}}>
        <TextInput
        style={styles.TextField}
        placeholder={props.FieldName}
        onChangeText={onChangeText}
        text={text}>
        </TextInput>
      </View>
    </View>

  );
}

const styles = StyleSheet.create({
  TextField: {
    paddingHorizontal: 10,
    height: 50,
    fontSize: 17,
    borderTopColor: "lightgray",
    borderTopWidth: 1,
    top:-1
  },
  FieldName: {
    color: "black",
  },
  FieldContents: {
    color: "gray",
  },
  View: {
    flex:  1,
    flexDirection: 'row'
  },
});

export default BasicTextField;
