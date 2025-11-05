import useTheme from "@/hooks/useTheme";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Tabs } from "expo-router";

export default function TabLayout() {
	const { colors } = useTheme();

	return (
		<Tabs
			screenOptions={{
				headerShown: false,
				tabBarActiveTintColor: colors.primary,
				tabBarInactiveTintColor: colors.textMuted,
				tabBarStyle: {
					backgroundColor: colors.surface,
					borderTopWidth: 1,
					borderTopColor: colors.border,
				},
				tabBarLabelStyle: {
					fontSize: 12,
					fontWeight: "bold",
				},
			}}
		>
			<Tabs.Screen
				name="index"
				options={{
					title: "Home",
					tabBarIcon: ({ color }) => (
						<FontAwesome size={28} name="home" color={color} />
					),
				}}
			/>
			<Tabs.Screen
				name="settings"
				options={{
					title: "Settings",
					tabBarIcon: ({ color }) => (
						<FontAwesome size={28} name="cog" color={color} />
					),
				}}
			/>
		</Tabs>
	);
}
