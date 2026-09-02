import React from "react";
import { ScrollView } from "react-native";
import ProfileScreen from "./screens/profile-screen";
import styles from "./styles";

export default function Profile() {
  return (
    <ScrollView
      contentContainerStyle={styles.contentContainer}
      showsVerticalScrollIndicator={false}
    >
      <ProfileScreen />
    </ScrollView>
  );
}
