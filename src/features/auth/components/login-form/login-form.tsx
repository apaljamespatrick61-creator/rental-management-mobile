import { zodResolver } from "@hookform/resolvers/zod";
import { Lock, LogIn, Mail } from "lucide-react-native";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import Button from "../../../../shared/components/button/button";
import { colors } from "../../../../shared/constants/theme";
import { LoginFormValues, loginSchema } from "../../model/login-schema";
import { styles } from "./styles";

interface LoginFormProps {
  email?: string;
  password?: string;
  onSignIn?: (values: LoginFormValues) => void;
  errorMessage?: string;
}
export default function LoginForm(props: Readonly<LoginFormProps>) {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: { email: props.email ?? "", password: props.password ?? "" },
  });

  const onSubmit = (values: LoginFormValues) => props.onSignIn?.(values);

  return (
    <View style={styles.container}>
      <View style={styles.borderForm}>
        <View style={styles.loginForm}>
          <Text style={styles.text}>Email Address:</Text>
          <View style={styles.inputRow}>
            <Mail
              size={styles.iconStyle.width}
              color={colors.primary}
              style={styles.inputIcon}
            />
            <Controller
              control={control}
              name="email"
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  placeholder="example@example.com"
                  style={styles.textInput}
                  placeholderTextColor={colors.textSecondary}
                  autoCapitalize="none"
                  keyboardType="email-address"
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                />
              )}
            />
          </View>
          {errors.email && (
            <Text style={styles.errorText}>{errors.email.message}</Text>
          )}
          <Text style={styles.text}>Password:</Text>
          <View style={styles.inputRow}>
            <Lock
              size={styles.iconStyle.width}
              color={colors.primary}
              style={styles.inputIcon}
            />
            <Controller
              control={control}
              name="password"
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  placeholder="********"
                  secureTextEntry
                  style={styles.textInput}
                  placeholderTextColor={colors.textSecondary}
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                />
              )}
            />
          </View>
          {errors.password && (
            <Text style={styles.errorText}>{errors.password.message}</Text>
          )}
          <View style={styles.forgotPasswordContainer}>
            <TouchableOpacity>
              <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
            </TouchableOpacity>
          </View>
          {props.errorMessage && (
            <Text style={styles.errorText}>{props.errorMessage}</Text>
          )}
          <View style={styles.signInContainer}>
            <Button
              title="Sign In"
              onPress={handleSubmit(onSubmit)}
              icon={
                <LogIn
                  size={styles.iconStyle.width}
                  color={styles.iconStyle.color}
                  style={styles.signInIcon}
                />
              }
              style={styles.signInBtn}
              textStyle={styles.signInText}
            />
          </View>
        </View>
      </View>
    </View>
  );
}
