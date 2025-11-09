import { createHomeStyles } from "@/assets/styles/home.styles";
import { api } from "@/convex/_generated/api";
import useTheme from "@/hooks/useTheme";
import { Ionicons } from "@expo/vector-icons";
import { useMutation } from "convex/react";
import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";
import { Alert, Text, TextInput, TouchableOpacity, View } from "react-native";

const TodoInput = () => {
	const { colors } = useTheme();
	const homeStyle = createHomeStyles(colors);

	const [inputValue, setInputValue] = useState("");

	const addtodo = useMutation(api.todos.addTodo);

	const handleAddTodo = async () => {
		if (inputValue.trim().length === 0) return;
		try {
			await addtodo({ text: inputValue.trim() });
			setInputValue("");
		} catch (error) {
			console.error("Error adding todo: ", error);
			Alert.alert(
				"Error",
				"There was an error adding the todo. Please try again."
			);
		}
	};

	return (
		<View style={homeStyle.inputSection}>
			<View style={homeStyle.inputWrapper}>
				<TextInput
					style={homeStyle.input}
					placeholder="Add a new task"
					placeholderTextColor={colors.textMuted}
					value={inputValue}
					onChangeText={setInputValue}
					onSubmitEditing={handleAddTodo}
				/>
				<TouchableOpacity onPress={handleAddTodo} disabled={!inputValue.trim()} activeOpacity={0.8}>
					<LinearGradient
						colors={inputValue.trim()? colors.gradients.primary: colors.gradients.muted}
						style={[homeStyle.addButton, !inputValue.trim() && homeStyle.addButtonDisabled]}
					>
						<Ionicons
							name="add-outline"
							size={24}
							color={!inputValue.trim() ? "gray" : "white"}
						/>
					</LinearGradient>
				</TouchableOpacity>
			</View>
		</View>
	);
};

export default TodoInput;
