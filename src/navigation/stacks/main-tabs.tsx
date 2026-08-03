import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text, View } from "react-native";
import Dashboard from "../../features/dashboard";
import { MainTabParamList } from "../types";
import { RentalsStack } from "./rentals-stack";

const Tab = createBottomTabNavigator<MainTabParamList>();

function TenantsPlaceholder() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Tenants screen coming soon.</Text>
    </View>
  );
}

function PaymentsPlaceholder() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Payments screen coming soon.</Text>
    </View>
  );
}

export function MainTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Dashboard" component={Dashboard} />
      <Tab.Screen
        name="Rentals"
        component={RentalsStack}
        options={{ headerShown: false }}
      />
      <Tab.Screen name="Tenants" component={TenantsPlaceholder} />
      <Tab.Screen name="Payments" component={PaymentsPlaceholder} />
    </Tab.Navigator>
  );
}
