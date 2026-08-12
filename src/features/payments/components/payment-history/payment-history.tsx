import { FlashList } from "@shopify/flash-list";
import React from "react";
import { Text, View } from "react-native";
import { colors } from "../../../../shared/constants/theme";
import styles from "./styles";

type PaymentHistoryItems = {
  id: string;
  title: string;
  date: string;
  status: string;
};
const ITEMS: PaymentHistoryItems[] = [
  {
    id: "1",
    title: "Monthly Rent - January 2026",
    date: "Aug 16, 2026",
    status: "Paid",
  },
  {
    id: "2",
    title: "Monthly Rent - February 2026",
    date: "Aug 19, 2026",
    status: "Pending",
  },
  {
    id: "3",
    title: "Monthly Rent - March 2026",
    date: "Aug 24, 2026",
    status: "Paid",
  },
  {
    id: "4",
    title: "Monthly Rent - April 2026",
    date: "Aug 27, 2026",
    status: "Pending",
  },
  {
    id: "5",
    title: "Monthly Rent - May 2026",
    date: "Sep 1, 2026",
    status: "Paid",
  },
  {
    id: "6",
    title: "Monthly Rent - June 2026",
    date: "Sep 3, 2026",
    status: "Pending",
  },
  {
    id: "7",
    title: "Monthly Rent - July 2026",
    date: "Sep 6, 2026",
    status: "Pending",
  },
  {
    id: "8",
    title: "Monthly Rent - August 2026",
    date: "Sep 9, 2026",
    status: "Pending",
  },
];

function PaymentSeparator() {
  return <View style={styles.itemSeparator} />;
}

function getStatusColor(status: string) {
  return status === "Paid" ? "#16A34A" : colors.warning;
}

export default function PaymentHistory() {

    const renderItem = ({ item }: { item: PaymentHistoryItems }) => (
    <View style={styles.itemRow}>
      <Text style={styles.itemTitle}>{item.title}</Text>
        <View style={styles.itemMetaRow}>
            <Text style={styles.itemDate}>{item.date}</Text>
            <Text
                style={[
                    styles.itemStatus,
                    { color: getStatusColor(item.status) },
                ]}
            >
                {item.status}
            </Text>
        </View>
    </View>
  );
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <View style={styles.boxContent}>
          <Text style={styles.boxText}>PAYMENT HISTORY</Text>
          <View style={styles.line} />
          <FlashList
            data={ITEMS}
            keyExtractor={(item) => item.id}
            style={styles.list}
            contentContainerStyle={styles.listContent}
            ItemSeparatorComponent={PaymentSeparator}
            renderItem={renderItem}
          />
        </View>
      </View>
    </View>
  );
}
