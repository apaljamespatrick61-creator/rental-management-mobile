import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';
export default function Footer() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Don&apos;t have an account?</Text>
      <TouchableOpacity>
        <Text style={styles.link}>Contact your property manager</Text>
      </TouchableOpacity>
    </View>
  );
}   