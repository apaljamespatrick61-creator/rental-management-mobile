import { render } from "@testing-library/react-native";
import React from "react";
import PaymentHistory from "./payment-history";

jest.mock("@shopify/flash-list", () => {
  const React = require("react");
  const { FlatList } = require("react-native");

  return {
    FlashList: FlatList,
  };
});

describe("PaymentHistory", () => {
  it("renders payment history content", () => {
    const { getByText, getAllByText } = render(<PaymentHistory />);

    expect(getByText("PAYMENT HISTORY")).toBeTruthy();
    expect(getByText("Monthly Rent - January 2026")).toBeTruthy();
    expect(getByText("Aug 16, 2026")).toBeTruthy();
    expect(getAllByText("Paid").length).toBeGreaterThan(0);
    expect(getAllByText("Pending").length).toBeGreaterThan(0);
  });
});
