import React, { useState } from "react";
import { TextInput, StyleSheet, Text, View } from "react-native";

function BasicTextField(props) {
  const [hgt, changehgt] = useState(50); //State for multi line text field height

  return (
    //A lot of views for some reason might wana redesign this one someday to optimize
    <View style={styles.View}>
      <View
        style={{ flex: 1, justifyContent: "center", alignItems: "flex-start" }}
      >
        <Text style={{ fontSize: 17 }}>{props.FieldName}</Text>
      </View>
      <View style={{ flex: 3 }}>
        <TextInput
          style={[styles.textInput, { height: hgt }]}
          placeholder={props.FieldName} //Displays this greyed out when field is empty
          onChangeText={props.settext} //Updates state with the field contents
          multiline={props.Multi ? true : false} //Bool prop if multiline is allowed
          value={props.text} //Currently displayed text in the box
          onContentSizeChange={(e) =>
            changehgt(30 + e.nativeEvent.contentSize.height)
          } // Increases text field size dynamicaly with the text
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
    flex: 1,
    flexDirection: "row",
  },
  textInput: {
    paddingHorizontal: 10,
    fontSize: 17,
    borderTopColor: "lightgray",
    borderTopWidth: 1,
    top: -1,
  },
});

export default BasicTextField;
