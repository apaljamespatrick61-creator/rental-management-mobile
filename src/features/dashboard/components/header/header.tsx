import React from "react";
import { View, Text } from "react-native";
import styles from "./styles";

interface HeaderProps {
  readonly name?: string;
}
export default function Header({ name = "John Doe" }: Readonly<HeaderProps>) {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Welcome, {name}!</Text>
    </View>
  );
}
