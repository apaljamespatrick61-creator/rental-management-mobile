import React from "react";
import { View } from "react-native";
import CurrentBalance from "../components/current-balance/current-balance";
import PaymentHistory from "../components/payment-history/payment-history";
export default function PaymentsScreen() {
  return (
    <View>
      <CurrentBalance />
      <PaymentHistory />
    </View>
  );
}