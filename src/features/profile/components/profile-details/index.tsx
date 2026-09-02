import { Info, UserRound } from "lucide-react-native";
import React from "react";
import { Text, View,TextInput } from "react-native";
import Button from "../../../../shared/components/button/button";
import { colors } from "../../../../shared/constants/theme";
import styles from "./styles";

export default function ProfileDetails() {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <View style={styles.profileContent}>
          <View style={styles.avatarPlaceholder}>
            <UserRound size={38} color={colors.primary} />
          </View>
          <View>
            <Text style={styles.name}>Alex Johnson</Text>
            <Text>Unit 402b</Text>
          </View>
        </View>
        <Button
          title="Edit Profile Photo"
          onPress={() => {}}
          style={styles.button}
        />
      </View>
      <View style={styles.box}>
        <View style={styles.profileHeaderContainer}>
          <Info size={22} color={colors.primary} />
          <Text style={styles.profileDetailsHeader}>Profile Details</Text>
        </View>
        <View style={styles.line} />
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Email Address</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Enter your email address"
          />
        </View>
      </View>
    </View>
  );
}
