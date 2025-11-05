import { createHomeStyles } from "@/assets/styles/home.styles";
import { api } from "@/convex/_generated/api";
import useTheme from "@/hooks/useTheme";
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
			<View style={homeStyle.container}>
				<LinearGradient colors={colors.gradients.surface}></LinearGradient>
				
			</View>
		</View>
	);
};

export default Header;
