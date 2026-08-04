import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  RentalCreateScreen,
  RentalDetailScreen,
  RentalsListScreen,
} from "../../features/rentals";
import { RentalsStackParamList } from "../types";

const Stack = createNativeStackNavigator<RentalsStackParamList>();

export function RentalsStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="RentalsList"
        component={RentalsListScreen}
        options={{ title: "Rentals" }}
      />
      <Stack.Screen
        name="RentalDetails"
        component={RentalDetailScreen}
        options={{ title: "Rental Details" }}
      />
      <Stack.Screen
        name="RentalCreate"
        component={RentalCreateScreen}
        options={{ title: "Add Rental" }}
      />
    </Stack.Navigator>
  );
}
