import { render } from "@testing-library/react-native";
import React from "react";
import PaymentStatus from "./payment-status";

jest.mock("lucide-react-native", () => {
  const MockIcon = () => null;

  return {
    CalendarDays: MockIcon,
  };
});

describe("PaymentStatus", () => {
  test("renders component", () => {
    const { toJSON } = render(<PaymentStatus />);

    expect(toJSON()).toBeTruthy();
  });

  it("renders payment summary content", () => {
    const { getByText } = render(<PaymentStatus />);

    expect(getByText("UPCOMING PAYMENT")).toBeTruthy();
    expect(getByText("₱2,4500 /month")).toBeTruthy();
    expect(getByText("Due on September 1, 2023")).toBeTruthy();
  });
});
