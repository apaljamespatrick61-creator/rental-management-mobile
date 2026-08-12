import React from "react";
import {
    Text,
    TouchableOpacity,
    type StyleProp,
    type TextStyle,
    type ViewStyle,
} from "react-native";
import styles from "./styles";

interface ButtonProps {
  title?: string;
  onPress?: () => void;
  icon?: React.ReactNode;
  disabled?: boolean;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
}

export default function Button({
  title = "Button",
  onPress,
  icon,
  disabled = false,
  style,
  textStyle,
}: Readonly<ButtonProps>) {
  return (
    <TouchableOpacity
      style={[styles.container, disabled && styles.disabled, style]}
      onPress={onPress}
      activeOpacity={0.8}
      disabled={disabled}
    >
      {icon}
      <Text style={[styles.text, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
}
