import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Bell, CreditCard, House, User } from "lucide-react-native";
import { StyleSheet, View } from "react-native";
import { moderateScale, verticalScale } from "react-native-size-matters";
import Dashboard from "../../features/dashboard";
import Notifications from "../../features/notifications";
import Payments from "../../features/payments";
import Profile from "../../features/profile";
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

export function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#1A73E8",
        tabBarInactiveTintColor: "black",
        tabBarLabelStyle: {
          fontSize: moderateScale(11),
          fontWeight: "500",
        },
        tabBarStyle: {
          height: verticalScale(64),
          paddingTop: verticalScale(4),
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
        component={Profile}
        options={{ tabBarIcon: ProfileTabIcon }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  iconContainer: {
    borderRadius: 12,
    paddingHorizontal: 10,
    paddingVertical: 3,
  },
  iconContainerActive: {
    backgroundColor: "#E8F0FE",
  },
});
