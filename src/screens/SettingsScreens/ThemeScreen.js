import React, { useState } from "react";
import { View } from "react-native";
import SettingsToggle from "../../components/SettingsToggle/SettingsToggle";

function SettingsTheme() {
  const [setting1, setSettings1] = useState(false);
  const [setting2, setSettings2] = useState(false);
  return (
    <View>
      <SettingsToggle
        title={"Dark theme"}
        isEnabled={setting1}
        setIsEnabled={setSettings1}
      />
      <SettingsToggle
        title={"Light theme"}
        isEnabled={setting2}
        setIsEnabled={setSettings2}
      />
    </View>
  );
}

export default SettingsTheme;
