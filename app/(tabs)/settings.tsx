import { createSettingsStyles } from "@/assets/styles/settings.styles";
import DangerZone from "@/components/DangerZone";
import Prefrences from "@/components/Prefrences";
import ProgresssStat from "@/components/ProgresssStat";
import useTheme from "@/hooks/useTheme";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";
import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Settings = () => {
	const [autoSync, setAutoSync] = useState(true);
	const [notifications, setNotifications] = useState(true);

	const { colors, isDarkMode, toggleDarkMode } = useTheme();

	const settingStyles = createSettingsStyles(colors);

	return (
		<LinearGradient
			colors={colors.gradients.background}
			style={settingStyles.container}
		>
			<SafeAreaView style={settingStyles.safeArea}>
				{/* header */}
				<View style={settingStyles.header}>
					<View style={settingStyles.titleContainer}>
						<LinearGradient
							style={settingStyles.iconContainer}
							colors={colors.gradients.primary}
						>
							<Ionicons name="settings-sharp" size={36} color="#ffffff" />
						</LinearGradient>

						<Text style={settingStyles.title}>Settings</Text>
					</View>
				</View>

				<ScrollView
					style={settingStyles.scrollView}
					contentContainerStyle={settingStyles.content}
					showsVerticalScrollIndicator={false}
				>
					<ProgresssStat />
					<Prefrences />
					<DangerZone />
				</ScrollView>
			</SafeAreaView>
		</LinearGradient>
	);
};

export default Settings;
