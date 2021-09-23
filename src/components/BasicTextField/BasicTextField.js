import React from "react";
import { TextInput, StyleSheet, Text, View } from "react-native";

function BasicTextField(props) {
  const [text, onChangeText] = React.useState("Useless Text");
  const [hgt, changehgt] = React.useState(50)

  return (

    <View style={styles.View}>
      <View style={{flex:1, justifyContent: "center", alignItems: "flex-start"}}>
      <Text style={{fontSize: 17}}>{props.FieldName}</Text>
      </View>
      <View style={{flex: 3}}>
        <TextInput
        style={{
          height: hgt,
          paddingHorizontal: 10,
          fontSize: 17,
          borderTopColor: "lightgray",
          borderTopWidth: 1,
          top:-1,
        }}
        placeholder={props.FieldName}
        onChangeText={onChangeText}
        multiline={props.Multi ? true : false}
        text={text}
        onContentSizeChange={(e) => changehgt(30 + e.nativeEvent.contentSize.height)}
        ></TextInput>
      </View>
    </View>

  );
}

const styles = StyleSheet.create({
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
