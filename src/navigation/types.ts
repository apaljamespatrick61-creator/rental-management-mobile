export type RootStackParamList = {
  Auth: undefined;
  MainTabs: undefined;
};

export type AuthStackParamList = {
  Login: undefined;
};

export type MainTabParamList = {
  Home: undefined;
  Payments: undefined;
  Alerts: undefined;
  Profile: undefined;
};

export type RentalsStackParamList = {
  RentalsList: undefined;
  RentalDetails: { id: string };
  RentalCreate: undefined;
};
