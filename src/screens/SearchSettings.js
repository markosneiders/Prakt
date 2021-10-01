import React, { useState } from "react";
import { ScrollView } from "react-native";
import SettingsToggle from "../components/SettingsToggle/SettingsToggle";
import SettingsCard from "../components/SettingsCard/Index";

function SearchSettings({ navigation }, props) {
	const [setting1, setSettings1] = useState(false);
	return (
		<ScrollView style={{ paddingTop: 40 }}>
			<SettingsToggle
				title={"Toggle setting"}
				isEnabled={setting1}
				setIsEnabled={setSettings1}
			/>
			<SettingsCard
				screen={"Search Radius settings"}
				icon={"crosshairs-gps"}
				color={"lightgreen"}
				title={"Search Radius"}
				navigation={navigation}
			/>
		</ScrollView>
	);
}

export default SearchSettings;
