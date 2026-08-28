import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Bell, CreditCard, House, User } from "lucide-react-native";
import { StyleSheet, Text, View } from "react-native";
import { moderateScale, verticalScale } from "react-native-size-matters";
import Dashboard from "../../features/dashboard";
import Payments from "../../features/payments"; 
import Notifications from "../../features/notifications";
import { MainTabParamList } from "../types";

const Tab = createBottomTabNavigator<MainTabParamList>();
const TAB_ICON_SIZE = moderateScale(20);

type TabIconProps = Readonly<{ color: string; focused: boolean }>;

function HomeTabIcon({ color, focused }: TabIconProps) {
  return (
    <View style={[styles.iconContainer, focused && styles.iconContainerActive]}>
      <House color={color} size={TAB_ICON_SIZE} />
    </View>
  );
}

function PaymentsTabIcon({ color, focused }: TabIconProps) {
  return (
    <View style={[styles.iconContainer, focused && styles.iconContainerActive]}>
      <CreditCard color={color} size={TAB_ICON_SIZE} />
    </View>
  );
}

function AlertsTabIcon({ color, focused }: TabIconProps) {
  return (
    <View style={[styles.iconContainer, focused && styles.iconContainerActive]}>
      <Bell color={color} size={TAB_ICON_SIZE} />
    </View>
  );
}

function ProfileTabIcon({ color, focused }: TabIconProps) {
  return (
    <View style={[styles.iconContainer, focused && styles.iconContainerActive]}>
      <User color={color} size={TAB_ICON_SIZE} />
    </View>
  );
}

function TenantsPlaceholder() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Tenants screen coming soon.</Text>
    </View>
  );
}



export function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#1A73E8",
        tabBarInactiveTintColor: "black",
        tabBarStyle: {
          height: verticalScale(50),
          paddingTop: verticalScale(6),
          paddingBottom: verticalScale(8),
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Dashboard}
        options={{ tabBarIcon: HomeTabIcon }}
      />
      <Tab.Screen
        name="Payments"
        component={Payments}
        options={{ tabBarIcon: PaymentsTabIcon }}
      />
      <Tab.Screen
        name="Alerts"
        component={Notifications}
        options={{ tabBarIcon: AlertsTabIcon }}
      />
      <Tab.Screen
        name="Profile"
        component={TenantsPlaceholder}
        options={{ tabBarIcon: ProfileTabIcon }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  iconContainer: {
    borderRadius: 12,
    paddingHorizontal: 10,
    paddingVertical: 6,
  },
  iconContainerActive: {
    backgroundColor: "#E8F0FE",
  },
});
