import React from "react";
import { View, Text } from "react-native";
import { styles } from "./styles";
import { Building2 } from "lucide-react-native";

export default function AuthHeader() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Building2 size={styles.icon.width} color={styles.icon.color} />
        <Text style={styles.title}>Tenant Portal</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.textStyle}>Welcome back. Please sign in to manage your residence</Text>
      </View>
    </View>
  );
}
