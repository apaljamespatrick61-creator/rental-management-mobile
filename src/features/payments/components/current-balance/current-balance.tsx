import { TriangleAlert } from "lucide-react-native";
import React from "react";
import { Text, View } from "react-native";
import styles from "./styles";
import {moderateScale} from "react-native-size-matters";
import {colors} from "../../../../shared/constants/theme";

export default function CurrentBalance() {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <View style={styles.boxContent}>
          <Text style={styles.boxText}>CURRENT BALANCE</Text>
          <Text style={styles.boxPaymentText}>₱2,4500</Text>
          <View style={styles.boxSubRow}>
            <TriangleAlert size={moderateScale(24)} color={colors.warning} />
            <Text style={styles.boxSubText}>Due in 3 days</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
