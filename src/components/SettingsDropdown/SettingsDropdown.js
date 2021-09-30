import React from "react";
import { View, Text, StyleSheet } from "react-native";
import {useState} from "react";

import NumberPlease from "react-native-number-please";
import Constants from 'expo-constants';

function SettingsDropdown(props){
        const initialValues = [{ id: "searchRadius", value: 5 }];
        const [searchRadius, setSearchRadius] = useState(initialValues);
        const searchRadiusNumbers = [{ id: "searchRadius", label: "km", min: 1, max: 99 }];

        return (
            <View style={styles.container}>
            <Text style={styles.paragraph}>Set your search radius</Text>
            <NumberPlease
                digits={searchRadiusNumbers}
                values={searchRadius}
                onChange={(values) => setSearchRadius(values)}
            />
            </View>
        );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      paddingTop: Constants.statusBarHeight,
      backgroundColor: '#ecf0f1',
      padding: 8,
    },
    paragraph: {
      margin: 24,
      fontSize: 18,
      fontWeight: 'bold',
      textAlign: 'center',
    },
  });

export default SettingsDropdown;