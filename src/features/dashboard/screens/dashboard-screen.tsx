import React from 'react';
import {View} from 'react-native';
import PaymentStatus from '../components/payment-status/payment-status';
import Header from '../components/header/header';
import LeaseDetails from '../components/lease-details/lease-details';
import Announcements from '../components/announcements/announcements';


export default function DashboardScreen() {
  return (
    <View>
      <Header />
      <PaymentStatus />
      <LeaseDetails />
      <Announcements />
    </View>
  );
}