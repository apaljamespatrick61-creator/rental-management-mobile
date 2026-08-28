import React from "react";
import { View } from "react-native";
import NotificationsScreen from "./screens/notifications-screen";
import { styles } from "./styles";
export default function Notifications() {
    return (
        <View style={styles.container}>
            <NotificationsScreen />
        </View>
    );
}