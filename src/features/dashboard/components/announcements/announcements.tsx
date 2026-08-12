import { FlashList } from "@shopify/flash-list";
import { Megaphone } from "lucide-react-native";
import React from "react";
import { Text, View } from "react-native";
import { colors } from "../../../../shared/constants/theme";
import styles from "./styles";

type AnnouncementItem = {
  id: string;
  title: string;
  date: string;
};

const ANNOUNCEMENTS: AnnouncementItem[] = [
  {
    id: "1",
    title: "Water interruption on Friday from 9:00 AM to 2:00 PM.",
    date: "Aug 16, 2026",
  },
  {
    id: "2",
    title: "Main gate repainting starts next Monday.",
    date: "Aug 19, 2026",
  },
  {
    id: "3",
    title: "Community meeting at the lobby this Saturday.",
    date: "Aug 24, 2026",
  },
  {
    id: "4",
    title:
      "Elevator maintenance scheduled for Tower B from 1:00 PM to 3:00 PM.",
    date: "Aug 27, 2026",
  },
  {
    id: "5",
    title: "Monthly pest control service will start at 8:00 AM this Sunday.",
    date: "Sep 1, 2026",
  },
  {
    id: "6",
    title: "Please update your emergency contact details in the tenant portal.",
    date: "Sep 3, 2026",
  },
  {
    id: "7",
    title:
      "Parking slot repainting is ongoing. Follow temporary parking signs.",
    date: "Sep 6, 2026",
  },
  {
    id: "8",
    title: "Garbage collection schedule moved to 7:00 AM starting next week.",
    date: "Sep 9, 2026",
  },
];

function AnnouncementSeparator() {
  return <View style={styles.separator} />;
}

export default function Announcements() {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <View style={styles.titleRow}>
          <Megaphone size={24} color={colors.primary} />
          <Text style={styles.titleText}>Announcements</Text>
        </View>

        <FlashList
          data={ANNOUNCEMENTS}
          scrollEnabled
          nestedScrollEnabled
          style={styles.list}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.listContent}
          ItemSeparatorComponent={AnnouncementSeparator}
          renderItem={({ item }) => (
            <View style={styles.itemRow}>
              <Text style={styles.itemTitle}>{item.title}</Text>
              <Text style={styles.itemDate}>{item.date}</Text>
            </View>
          )}
        />
      </View>
    </View>
  );
}
