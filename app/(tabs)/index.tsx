import { createHomeStyles } from "@/assets/styles/home.styles";
import Header from "@/components/Header";
import useTheme from "@/hooks/useTheme";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
	const { toggleDarkMode, colors } = useTheme();

	const homeStyle = createHomeStyles(colors);

	return (
		<LinearGradient
			colors={colors.gradients.background}
			style={homeStyle.container}
		>
			<StatusBar barStyle={colors.statusBarStyle} />
			<SafeAreaView style={homeStyle.safeArea}>
				<Header />
				<TouchableOpacity
					onPress={toggleDarkMode}
					style={{
						backgroundColor: "lightgray",
						margin: 4,
						width: 200,
						height: 50,
						alignItems: "center",
						justifyContent: "center",
						borderRadius: 10,
					}}
				>
					<Text>Toggle Dark Mode</Text>
				</TouchableOpacity>
			</SafeAreaView>
		</LinearGradient>
	);
}
