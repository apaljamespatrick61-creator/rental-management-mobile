import { render } from "@testing-library/react-native";
import React from "react";
import PaymentsScreen from "./payments-screen";

jest.mock("lucide-react-native", () => {
  const MockIcon = () => null;

  return {
    TriangleAlert: MockIcon,
  };
});

jest.mock("@shopify/flash-list", () => {
  const React = require("react");
  const { FlatList } = require("react-native");

  return {
    FlashList: FlatList,
  };
});

describe("PaymentsScreen", () => {
  it("renders current balance and payment history sections", () => {
    const { getByText } = render(<PaymentsScreen />);

    expect(getByText("CURRENT BALANCE")).toBeTruthy();
    expect(getByText("PAYMENT HISTORY")).toBeTruthy();
  });
});
