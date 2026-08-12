import { render } from "@testing-library/react-native";
import React from "react";
import DashboardScreen from "./dashboard-screen";

jest.mock("lucide-react-native", () => {
  const MockIcon = () => null;

  return {
    CalendarDays: MockIcon,
    Info: MockIcon,
    Megaphone: MockIcon,
  };
});

describe("DashboardScreen", () => {
  it("renders all dashboard sections", () => {
    const { getByText } = render(<DashboardScreen />);

    expect(getByText("Welcome, John Doe!")).toBeTruthy();
    expect(getByText("UPCOMING PAYMENT")).toBeTruthy();
    expect(getByText("Lease Details")).toBeTruthy();
    expect(getByText("Announcements")).toBeTruthy();
  });
});
