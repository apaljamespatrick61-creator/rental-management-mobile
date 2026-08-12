import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {

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
 
    </Stack.Navigator>
  );
}
