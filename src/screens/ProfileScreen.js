import React from "react";
import { StyleSheet, ScrollView,View, Text, Image} from "react-native";
import { TouchableOpacity} from "react-native-gesture-handler";
import BasicTextField from "../components/BasicTextField/Index";
import ProfilePicture from "../components/ProfilePicture/Index";


function ProfileScreen({ navigation }) {
  //const [edit, setedit] = useState(false);
  //useEffect(() => {
  //  navigation.setOptions({
  //    headerRight: () => <Button onPress={() => setedit(!edit)} title="edit" />,
  //  });
  //}, [edit, setedit]);
  
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <ProfilePicture Width={100} Height={100} />
        <View style={styles.textcontainer}>
          <BasicTextField FieldName={"Name"} />
          <BasicTextField FieldName={"Surname"} />
          <BasicTextField FieldName={"Email"} />
          <BasicTextField FieldName={"Bio"} Multi={true} />
        </View>
    </ScrollView>
  );
}





const styles = StyleSheet.create({
  container: {
    margin: 20,
    marginTop: 0,
  },
  textcontainer: {
    borderBottomWidth: 1,
    borderBottomColor: "lightgray",
    borderTopWidth: 1,
    borderTopColor: "lightgray"
  },
});

export default ProfileScreen;
