import React from 'react';
import { View } from 'react-native';
import AuthHeader from '../components/auth-header/auth-header';
import { styles } from './styles';
import LoginForm from '../components/login-form/login-form';
import Footer from '../components/footer/footer';
export default function LoginScreen() {
  return (
    <View style={styles.container}>
      <AuthHeader />
      <LoginForm />
      <Footer />
    </View>
  );
}
