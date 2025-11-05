import { ConvexProvider, ConvexReactClient } from "convex/react";
import { Stack, Tabs } from "expo-router";
import { ThemeProvider } from "../hooks/useTheme";

const convex = new ConvexReactClient(process.env.EXPO_PUBLIC_CONVEX_URL!, {
	unsavedChangesWarning: false,
});

export default function RootLayout() {
	return (
		<ThemeProvider>
			<ConvexProvider client={convex}>
				<Stack>
					<Stack.Screen name="(tabs)" options={{ headerShown: false }} />
				</Stack>

			</ConvexProvider>
		</ThemeProvider>
	);
}
