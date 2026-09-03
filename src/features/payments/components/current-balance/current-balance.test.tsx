import { render } from "@testing-library/react-native";
import React from "react";
import CurrentBalance from "./current-balance";

jest.mock("lucide-react-native", () => {
  const MockIcon = () => null;

  return {
    TriangleAlert: MockIcon,
  };
});

describe("CurrentBalance", () => {
  it("renders current balance details", () => {
    const { getByText } = render(<CurrentBalance />);

    expect(getByText("CURRENT BALANCE")).toBeTruthy();
    expect(getByText("₱2,4500")).toBeTruthy();
    expect(getByText("Due in 3 days")).toBeTruthy();
  });
});
