import { createSettingsStyles } from "@/assets/styles/settings.styles";
import { api } from "@/convex/_generated/api";
import useTheme from "@/hooks/useTheme";
import { Ionicons } from "@expo/vector-icons";
import { useQuery } from "convex/react";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Text, View } from "react-native";

const ProgresssStat = () => {
	const { colors } = useTheme();
	const settingStyles = createSettingsStyles(colors);

	const todos = useQuery(api.todos.getTodos);
	const totalSize = todos ? todos.length : 0;
	const completed = todos?.filter((todo) => todo.isCompleted).length || 0;
	const activeTodos = totalSize - completed;

	return (
		<LinearGradient
			colors={colors.gradients.surface}
			style={settingStyles.section}
		>
			
				<Text style={settingStyles.sectionTitle}>Progress Stats</Text>
				<View style={settingStyles.statsContainer}>
                    {/* Total Tasks */}
					<LinearGradient
						colors={colors.gradients.background}
						style={[
							settingStyles.statCard,
							{ borderLeftColor: colors.primary },
						]}
					>
						<View style={settingStyles.statIconContainer}>
							<LinearGradient
								colors={colors.gradients.primary}
								style={settingStyles.statIcon}
							>
								<Ionicons name="menu-outline" size={24} color="#ffffff" />
							</LinearGradient>
						</View>

						<View>
							<Text style={settingStyles.statNumber}>{totalSize}</Text>
							<Text style={settingStyles.statLabel}>Total Tasks</Text>
						</View>
					</LinearGradient>

                    {/* Completed  */}
                    <LinearGradient
						colors={colors.gradients.background}
						style={[
							settingStyles.statCard,
							{ borderLeftColor: colors.success },
						]}
					>
						<View style={settingStyles.statIconContainer}>
							<LinearGradient
								colors={colors.gradients.success}
								style={settingStyles.statIcon}
							>
								<Ionicons name="menu-outline" size={24} color="#ffffff" />
							</LinearGradient>
						</View>

						<View>
							<Text style={settingStyles.statNumber}>{completed}</Text>
							<Text style={settingStyles.statLabel}>Completed Tasks</Text>
						</View>
					</LinearGradient>
                    {/* Active Tasks  */}
                    <LinearGradient
						colors={colors.gradients.background}
						style={[
							settingStyles.statCard,
							{ borderLeftColor: colors.warning },
						]}
					>
						<View style={settingStyles.statIconContainer}>
							<LinearGradient
								colors={colors.gradients.warning}
								style={settingStyles.statIcon}
							>
								<Ionicons name="menu-outline" size={24} color="#ffffff" />
							</LinearGradient>
						</View>

						<View>
							<Text style={settingStyles.statNumber}>{activeTodos}</Text>
							<Text style={settingStyles.statLabel}>Active Tasks</Text>
						</View>
					</LinearGradient>
				</View>

			
		</LinearGradient>
	);
};

export default ProgresssStat;
