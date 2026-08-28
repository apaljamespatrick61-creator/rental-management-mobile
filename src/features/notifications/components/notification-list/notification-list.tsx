import { FlashList } from "@shopify/flash-list";
import { BellRing } from "lucide-react-native";
import React from "react";
import { Text, View } from "react-native";
import { moderateScale } from "react-native-size-matters";
import { colors } from "../../../../shared/constants/theme";
import { styles } from "./styles";

type NotificationItems = {
  id: string;
  title: string;
  date: string;
  description: string;
};
const ITEMS: NotificationItems[] = [
  {
    id: "1",
    title: "Gate Access Update",
    date: "Sep 02, 2026",
    description:
      "Your new RFID sticker is ready for pickup at the admin office between 9:00 AM and 5:00 PM.",
  },
  {
    id: "2",
    title: "Billing Reminder",
    date: "Sep 05, 2026",
    description:
      "A gentle reminder that your monthly dues are due in three days. Please pay before the deadline to avoid late fees.",
  },
  {
    id: "3",
    title: "Water Service Notice",
    date: "Sep 07, 2026",
    description:
      "Water pressure may be lower than usual from 1:00 PM to 4:00 PM due to scheduled maintenance.",
  },
  {
    id: "4",
    title: "Package Arrived",
    date: "Sep 09, 2026",
    description:
      "A parcel under your unit number has arrived and is available at the front desk for claim.",
  },
  {
    id: "5",
    title: "Elevator Maintenance",
    date: "Sep 12, 2026",
    description:
      "Elevator B will be temporarily unavailable tomorrow from 10:00 AM to 12:00 PM for safety checks.",
  },
  {
    id: "6",
    title: "Community Event",
    date: "Sep 14, 2026",
    description:
      "Join us for a tenants meet-and-greet this Saturday at the function hall. Snacks and drinks will be provided.",
  },
  {
    id: "7",
    title: "Parking Advisory",
    date: "Sep 17, 2026",
    description:
      "Please avoid Parking Slots A1 to A8 tonight due to repainting work from 8:00 PM onward.",
  },
  {
    id: "8",
    title: "Security Alert",
    date: "Sep 20, 2026",
    description:
      "For your safety, ensure your unit door is locked at all times and report unfamiliar visitors to the guard station.",
  },
];

const itemSeparator = () => <View style={styles.itemSeparator} />;

export default function NotificationList() {
  const renderItem = ({ item }: { item: NotificationItems }) => (
    <View style={styles.itemContainer}>
      <View style={styles.titleRow}>
        <BellRing size={moderateScale(18)} color={colors.primary} />
        <Text style={styles.itemTitle}>{item.title}</Text>
      </View>
      <Text style={styles.itemDescription}>{item.description}</Text>
      <Text style={styles.itemDate}>{item.date}</Text>
    </View>
  );
  return (
    <View style={styles.container}>
      <FlashList
        data={ITEMS}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={itemSeparator}
      />
    </View>
  );
}
