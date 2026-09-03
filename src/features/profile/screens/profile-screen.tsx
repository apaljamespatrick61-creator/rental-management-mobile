import React from "react";
import { Text, View } from "react-native";
import ProfileDetails from "../components/profile-details"; 
import styles from "./styles";

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <ProfileDetails />

    </View>
  );
}
