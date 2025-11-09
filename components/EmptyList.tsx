import { createHomeStyles } from "@/assets/styles/home.styles";
import useTheme from "@/hooks/useTheme";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Text, View } from "react-native";

const EmptyList = () => {
	const { colors } = useTheme();
	const homeStyle = createHomeStyles(colors);
	return (
		<View style={homeStyle.emptyContainer}>
			<LinearGradient
				colors={colors.gradients.empty}
				style={homeStyle.emptyIconContainer}
			>
				<Ionicons name="clipboard-outline" size={64} color={colors.textMuted} />
			</LinearGradient>
			<Text style={homeStyle.emptyText}>No todos yet!</Text>
			<Text style={homeStyle.emptySubtext}>
				Add your first todo above to get started
			</Text>
		</View>
	);
};

export default EmptyList;
