import { Info } from "lucide-react-native";
import React from "react";
import { Text, View } from "react-native";
import styles from "./styles";
import { colors } from "../../../../shared/constants/theme";

export default function LeaseDetails() {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <View style={styles.titleRow}>
          <Info size={24} color={colors.primary} />
          <Text style={styles.titleText}>Lease Details</Text>
        </View>
        <View style={styles.line} />
        <View style={styles.leaseDetailsContainer}>
          <Text style={{ color: styles.titleText.color }}>Base Rent:</Text>
          <Text style={styles.subText}>₱2,4500 /month</Text>
        </View>
        <View style={styles.leaseDetailsContainer}>
          <Text style={{ color: styles.titleText.color }}>
            Fixed Utilities:
          </Text>
          <Text style={styles.subText}>₱150/month</Text>
        </View>
        <View style={styles.line} />
        <View style={styles.leaseDetailsContainer}>
          <Text style={{ color: styles.titleText.color }}>Lease End Date:</Text>
          <Text style={styles.subText}>Sep 30, 2024</Text>
        </View>
      </View>
    </View>
  );
}
