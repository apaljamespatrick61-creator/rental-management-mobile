import { render } from "@testing-library/react-native";
import React from "react";
import NotificationList from "./notification-list";

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

describe("NotificationList", () => {
  it("renders notification item content", () => {
    const { getByText } = render(<NotificationList />);

    expect(getByText("Gate Access Update")).toBeTruthy();
    expect(
      getByText(
        "Your new RFID sticker is ready for pickup at the admin office between 9:00 AM and 5:00 PM.",
      ),
    ).toBeTruthy();
    expect(getByText("Sep 02, 2026")).toBeTruthy();
  });
});
