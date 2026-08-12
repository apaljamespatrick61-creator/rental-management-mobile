import { CalendarDays } from "lucide-react-native";
import React from "react";
import { Text, View } from "react-native";
import styles from "./styles";
import {moderateScale} from "react-native-size-matters";
import {colors} from "../../../../shared/constants/theme";

export default function PaymentStatus() {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <View style={styles.boxContent}>
          <Text style={styles.boxText}>UPCOMING PAYMENT</Text>
          <Text style={styles.boxPaymentText}>₱2,4500 /month</Text>
          <View style={styles.boxSubRow}>
            <CalendarDays size={moderateScale(24)} color={colors.primary} />
            <Text style={styles.boxSubText}>Due on September 1, 2023</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
