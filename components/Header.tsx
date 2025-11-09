import { createHomeStyles } from "@/assets/styles/home.styles";
import { api } from "@/convex/_generated/api";
import useTheme from "@/hooks/useTheme";
import { Ionicons } from "@expo/vector-icons";
import { useQuery } from "convex/react";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Text, View } from "react-native";

const Header = () => {
	const { colors } = useTheme();
	const homeStyle = createHomeStyles(colors);

	const todos = useQuery(api.todos.getTodos);

	const completedCount = todos
		? todos.filter((todo) => todo.isCompleted).length
		: 0;
	const totalCount = todos ? todos.length : 0;
	const progressPercentage =
		totalCount > 0 ? (completedCount / totalCount) * 100 : 0;

	return (
		<View style={homeStyle.header}>
			<View style={homeStyle.titleContainer}>
				<LinearGradient
					colors={colors.gradients.primary}
					style={homeStyle.iconContainer}
				>
					<Ionicons name="flash-outline" size={28} color="#ffffff" />
				</LinearGradient>
				<View style={homeStyle.titleTextContainer}>
					<Text style={homeStyle.title}>Today&apos;s task 👀</Text>
					<Text style={homeStyle.subtitle}> {completedCount} of {totalCount} completed</Text>
				</View>
			</View>

			<View style={homeStyle.progressContainer}>
				<View style={homeStyle.progressBarContainer}>
					<View style={homeStyle.progressBar}>
						<LinearGradient 
						style={[homeStyle.progressFill, {width: `${progressPercentage}%`}]}
						colors={colors.gradients.success}
						/>
					</View>
					<Text style={homeStyle.progressText}>
						{Math.round(progressPercentage)}%
					</Text>
				</View>
			</View>
		</View>
	);
};

export default Header;
