import { CommonActions, useNavigation } from "@react-navigation/native";
import React from "react";
import { View } from "react-native";
import { RootStackParamList } from "../../../navigation/types";
import AuthHeader from "../components/auth-header/auth-header";
import Footer from "../components/footer/footer";
import LoginForm from "../components/login-form/login-form";
import { useLogin } from "../hooks/use-login";
import { LoginFormValues } from "../model/login-schema";
import { styles } from "./styles";

export default function LoginScreen() {
  const navigation = useNavigation<any>();
  const { mutate, isError } = useLogin();

  const handleSignIn = (values: LoginFormValues) => {
    mutate(values, {
      onSuccess: () => {
        navigation.dispatch(
          CommonActions.reset({
            index: 0,
            routes: [{ name: "MainTabs" as keyof RootStackParamList }],
          }),
        );
      },
    });
  };

  return (
    <View style={styles.container}>
      <AuthHeader />
      <LoginForm
        onSignIn={handleSignIn}
        errorMessage={isError ? "Invalid email or password" : undefined}
      />
      <Footer />
    </View>
  );
}
