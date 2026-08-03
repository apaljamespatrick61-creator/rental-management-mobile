export type RootStackParamList = {
  Auth: undefined;
  MainTabs: undefined;
};

export type AuthStackParamList = {
  Login: undefined;
};

export type MainTabParamList = {
  Dashboard: undefined;
  Rentals: undefined;
  Tenants: undefined;
  Payments: undefined;
};

export type RentalsStackParamList = {
  RentalsList: undefined;
  RentalDetails: { id: string };
  RentalCreate: undefined;
};
