import { createHomeStyles } from "@/assets/styles/home.styles";
import EmptyList from "@/components/EmptyList";
import Header from "@/components/Header";
import Loading from "@/components/Loading";
import TodoInput from "@/components/TodoInput";
import { api } from "@/convex/_generated/api";
import { Doc, Id } from "@/convex/_generated/dataModel";
import useTheme from "@/hooks/useTheme";
import { Ionicons } from "@expo/vector-icons";
import { useMutation, useQuery } from "convex/react";
import { LinearGradient } from "expo-linear-gradient";
import {
	Alert,
	FlatList,
	StatusBar,
	Text,
	TouchableOpacity,
	View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type todo = Doc<"todos">;

export default function Index() {
	const { toggleDarkMode, colors } = useTheme();

	const homeStyle = createHomeStyles(colors);

	const todos = useQuery(api.todos.getTodos);

	const toggleTodo = useMutation(api.todos.toggleTodo);

	const handleTodoToggle = async (id: Id<"todos">) => {
		try {
			await toggleTodo({ id });
		} catch (error) {
			console.error("Error toggling todo:", error);
			Alert.alert(
				"Error",
				"There was an error toggling the todo item. Please try again."
			);
		}
	};

	const renderTodoList = ({ item }: { item: todo }) => {
		return (
			<View style={homeStyle.todoItemWrapper}>
				<LinearGradient
					colors={colors.gradients.surface}
					style={homeStyle.todoItem}
					start={{ x: 0, y: 0 }}
					end={{ x: 1, y: 1 }}
				>
					<TouchableOpacity
						style={homeStyle.checkbox}
						activeOpacity={0.7}
						onPress={() => handleTodoToggle(item._id)}
					>
						<LinearGradient
							colors={
								item.isCompleted
									? colors.gradients.success
									: colors.gradients.muted
							}
							style={[
								homeStyle.checkboxInner,
								{
									borderColor: item.isCompleted ? "transparent" : colors.border,
								},
							]}
						>
							{item.isCompleted && (
								<Ionicons name="checkmark" size={20} color="white" />
							)}
						</LinearGradient>
					</TouchableOpacity>

					<View style={homeStyle.todoTextContainer}>
						<Text
							style={[
								homeStyle.todoText,
								item.isCompleted && {
									textDecorationLine: "line-through",
									color: colors.textMuted,
									opacity: 0.4,
								},
							]}
						>
							{item.text}
						</Text>

						<View style={homeStyle.todoActions}>
							<TouchableOpacity activeOpacity={0.8}>
								<LinearGradient
									colors={colors.gradients.warning}
									style={homeStyle.actionButton}
								>
									<Ionicons name="pencil" size={20} color="#ffffff" />
								</LinearGradient>
							</TouchableOpacity>

							<TouchableOpacity activeOpacity={0.8}>
								<LinearGradient
									colors={colors.gradients.danger}
									style={homeStyle.actionButton}
								>
									<Ionicons name="trash" size={20} color="#ffffff" />
								</LinearGradient>
							</TouchableOpacity>
						</View>
					</View>
				</LinearGradient>
			</View>
		);
	};

	const loading = todos === undefined;

	if (loading) return <Loading />;

	return (
		<LinearGradient
			colors={colors.gradients.background}
			style={homeStyle.container}
		>
			<StatusBar barStyle={colors.statusBarStyle} />
			<SafeAreaView style={homeStyle.safeArea}>
				<Header />
				<TodoInput />

				<FlatList
					data={todos}
					keyExtractor={(item) => item._id}
					renderItem={renderTodoList}
					style={homeStyle.todoList}
					contentContainerStyle={homeStyle.todoListContent}
					// extraData={todos}
					showsVerticalScrollIndicator={false}
					ListEmptyComponent={<EmptyList />}
				/>

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
