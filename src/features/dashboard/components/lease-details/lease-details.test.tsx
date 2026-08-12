import { render } from "@testing-library/react-native";
import React from "react";
import LeaseDetails from "./lease-details";

jest.mock("lucide-react-native", () => {
  const MockIcon = () => null;

  return {
    Info: MockIcon,
  };
});

describe("LeaseDetails", () => {
  it("renders lease details content", () => {
    const { getByText } = render(<LeaseDetails />);

    expect(getByText("Lease Details")).toBeTruthy();
    expect(getByText("Base Rent:")).toBeTruthy();
    expect(getByText("Fixed Utilities:")).toBeTruthy();
    expect(getByText("Lease End Date:")).toBeTruthy();
  });
});
