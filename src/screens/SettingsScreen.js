import React, {useState} from "react"
import { Button, Text, View } from "react-native"
import { Switch } from "react-native-gesture-handler";


function SettingsScreen() {
    const [switchValue, setSwitchValue] = useState(false);

  const toggleSwitch = (value) => {
    setSwitchValue(value);
  };

    return(
        <View>
        <Text>
          {switchValue ? 'Switch is ON' : 'Switch is OFF'}
        </Text>
        <Switch
          style={{marginTop: 30}}
          onValueChange={toggleSwitch}
          value={switchValue}
        />
      </View>
        
    );
}

export default SettingsScreen;