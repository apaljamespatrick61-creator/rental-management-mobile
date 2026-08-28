import React from "react";
import PaymentsScreen from "./screens/payments-screen";
import { ScrollView } from "react-native";
import styles from "./styles";


export default function Payments() {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
      showsVerticalScrollIndicator={false}
    >
      <PaymentsScreen />
    </ScrollView>
  );
}