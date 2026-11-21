import { QueryClientProvider } from "@tanstack/react-query";
import { StatusBar } from "expo-status-bar";
import { Platform, StyleSheet, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { RootNavigator } from "./src/navigation";
import { queryClient } from "./src/services/query/query-client";

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaProvider>
        <View style={styles.outerContainer}>
          <SafeAreaView
            style={styles.container}
            edges={["top", "left", "right"]}
          >
            <StatusBar style="dark" />
            <RootNavigator />
          </SafeAreaView>
        </View>
      </SafeAreaProvider>
    </QueryClientProvider>
  );
}

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    backgroundColor: Platform.OS === "web" ? "#0F172A" : "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
    ...(Platform.OS === "web" && {
      paddingVertical: 16,
    }),
  },
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "#FFFFFF",
    ...(Platform.OS === "web" && {
      maxWidth: 430,
      height: "100%",
      maxHeight: 932,
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 8 },
      shadowOpacity: 0.25,
      shadowRadius: 24,
      borderRadius: 16,
      overflow: "hidden",
    }),
  },
});
