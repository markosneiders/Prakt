import React, { useState } from "react";
import { ScrollView } from "react-native";
import SettingsToggle from "../components/SettingsToggle/SettingsToggle";

function SearchSettings(props) {
	const [setting1, setSettings1] = useState(false);
	return (
		<ScrollView style={{ paddingTop: 40 }}>
			<SettingsToggle
				title={"Toggle setting"}
				isEnabled={setting1}
				setIsEnabled={setSettings1}
			/>
		</ScrollView>
	);
}

export default SearchSettings;
