import React from "react";
import { View, Text } from "react-native";
import styles from "./styles";

export default function PaymentStatus() {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <View style={styles.boxContent}>
          <Text style={styles.boxText}>Upcoming Payment</Text>
          <Text style={styles.boxPaymentText}>₱2,4500 /month</Text>
          <Text style={styles.boxSubText}>Due on September 1, 2023</Text>
        </View>
      </View>
    </View>
  );
}
