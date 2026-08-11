import React from 'react';
import {View} from 'react-native';
import DashboardScreen from './screens/dashboard-screen';
import styles from './styles';
export default function Dashboard() {
  return (
    <View style={styles.container}>
      <DashboardScreen />
    </View>
  );
}
