import { Lock, LogIn, Mail } from "lucide-react-native";
import React from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import Button from "../../../../shared/components/button/button";
import { colors } from "../../../../shared/constants/theme";
import { styles } from "./styles";

interface LoginFormProps {
  email?: string;
  password?: string;
  onSignIn?: () => void;
}
export default function LoginForm(props: Readonly<LoginFormProps>) {
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
            <TextInput
              placeholder="example@example.com"
              style={styles.textInput}
              placeholderTextColor={colors.textSecondary}
              value={props.email}
            />
          </View>
          <Text style={styles.text}>Password:</Text>
          <View style={styles.inputRow}>
            <Lock
              size={styles.iconStyle.width}
              color={colors.primary}
              style={styles.inputIcon}
            />
            <TextInput
              placeholder="********"
              secureTextEntry
              style={styles.textInput}
              placeholderTextColor={colors.textSecondary}
              value={props.password}
            />
          </View>
          <View style={styles.forgotPasswordContainer}>
            <TouchableOpacity>
              <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.signInContainer}>
            <Button
              title="Sign In"
              onPress={props.onSignIn}
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
