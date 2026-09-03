import { render } from "@testing-library/react-native";
import React from "react";
import NotificationsScreen from "./notifications-screen";

jest.mock("lucide-react-native", () => {
  const MockIcon = () => null;

  return {
    BellRing: MockIcon,
  };
});

jest.mock("@shopify/flash-list", () => {
  const React = require("react");
  const { FlatList } = require("react-native");

  return {
    FlashList: FlatList,
  };
});

describe("NotificationsScreen", () => {
  it("renders notifications header and list", () => {
    const { getByText } = render(<NotificationsScreen />);

    expect(getByText("Notifications")).toBeTruthy();
    expect(getByText("Gate Access Update")).toBeTruthy();
  });
});
