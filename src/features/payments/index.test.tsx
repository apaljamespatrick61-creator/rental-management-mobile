import { render } from "@testing-library/react-native";
import React from "react";
import Payments from "./index";

jest.mock("./screens/payments-screen", () => {
  const React = require("react");
  const { Text } = require("react-native");

  return function MockPaymentsScreen() {
    return <Text>Mock Payments Screen</Text>;
  };
});

describe("Payments index", () => {
  it("renders payments screen inside container", () => {
    const { getByText } = render(<Payments />);

    expect(getByText("Mock Payments Screen")).toBeTruthy();
  });
});
