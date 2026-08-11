import React from 'react';
import {View} from 'react-native';
import PaymentStatus from '../components/payment-status/payment-status';
import Header from '../components/header/header';
export default function DashboardScreen() {
  return (
    <View>
      <Header />
      <PaymentStatus />
    </View>
  );
}