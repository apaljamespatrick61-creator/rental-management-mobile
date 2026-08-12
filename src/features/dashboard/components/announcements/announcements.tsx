import { Megaphone } from "lucide-react-native";
import React from "react";
import { Text, View } from "react-native";
import { colors } from "../../../../shared/constants/theme";
import styles from "./styles";
export default function Announcements() {
  return (
      <View style={styles.container}>
        <View style={styles.box}>
          <View style={styles.titleRow}>
            <Megaphone size={24} color={colors.primary} />
            <Text style={styles.titleText}>Announcements</Text>
          </View>
    
        </View>
      </View>
  );
}
