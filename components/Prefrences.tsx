import { createSettingsStyles } from "@/assets/styles/settings.styles";
import useTheme from "@/hooks/useTheme";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";
import { Switch, Text, View } from "react-native";

const Prefrences = () => {
    const [isAutoSync, setIsAutoSync] = useState(true);
    const [isNotificationsEnabled, setIsNotificationsEnabled] = useState(true);
	const { colors, isDarkMode, toggleDarkMode } = useTheme();
	const settingStyle = createSettingsStyles(colors);

	return (
		<LinearGradient
			colors={colors.gradients.surface}
			style={settingStyle.section}
		>
			<Text style={settingStyle.sectionTitle}>Prefrences</Text>

			{/* DarkMode  */}
			<View style={settingStyle.settingItem}>
				<View style={settingStyle.settingLeft}>
					<LinearGradient
						colors={colors.gradients.primary}
						style={settingStyle.settingIcon}
					>
						<Ionicons name="moon" size={18} color="#fff" />
					</LinearGradient>
					<Text style={settingStyle.settingText}>Dark Mode</Text>
				</View>
				{/* Toggle Button */}
				<Switch
					value={isDarkMode}
					onValueChange={toggleDarkMode}
					thumbColor="#fff"
                    trackColor = {{false: colors.border, true: colors.primary}}
                    ios_backgroundColor={colors.border}
				/>
			</View>

            {/* Notification  */}
			<View style={settingStyle.settingItem}>
				<View style={settingStyle.settingLeft}>
					<LinearGradient
						colors={colors.gradients.warning}
						style={settingStyle.settingIcon}
					>
						<Ionicons name="notifications" size={18} color="#fff" />
					</LinearGradient>
					<Text style={settingStyle.settingText}>Notifications</Text>
				</View>
				{/* Toggle Button */}
				<Switch
					value={isNotificationsEnabled}
					onValueChange={()=>setIsNotificationsEnabled(!isNotificationsEnabled)}
					thumbColor="#fff"
                    trackColor = {{false: colors.border, true: colors.warning}}
                    ios_backgroundColor={colors.border}
				/>
			</View>

            {/* Sync  */}
			<View style={settingStyle.settingItem}>
				<View style={settingStyle.settingLeft}>
					<LinearGradient
						colors={colors.gradients.success}
						style={settingStyle.settingIcon}
					>
						<Ionicons name="sync" size={18} color="#fff" />
					</LinearGradient>
					<Text style={settingStyle.settingText}>Auto Sync</Text>
				</View>
				{/* Toggle Button */}
				<Switch
					value={isAutoSync}
					onValueChange={()=>setIsAutoSync(!isAutoSync)}
					thumbColor="#fff"
                    trackColor = {{false: colors.border, true: colors.success}}
                    ios_backgroundColor={colors.border}
				/>
			</View>
		</LinearGradient>
	);
};

export default Prefrences;
