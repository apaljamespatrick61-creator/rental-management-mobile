import React from "react";
import { View } from "react-native";
import Header from "../components/Header/header";
import NotificationList from "../components/notification-list/notification-list";
import { styles } from "./styles";

export default function NotificationsScreen() {
  return (
    <View style={styles.container}>
      <Header />
      <NotificationList />
    </View>
  );
}