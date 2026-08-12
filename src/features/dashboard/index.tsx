import React from "react";
import { ScrollView } from "react-native";
import DashboardScreen from "./screens/dashboard-screen";
import styles from "./styles";

export default function Dashboard() {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
      showsVerticalScrollIndicator={false}
    >
      <DashboardScreen />
    </ScrollView>
  );
}
