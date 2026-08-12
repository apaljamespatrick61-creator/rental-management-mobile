import { render } from "@testing-library/react-native";
import React from "react";
import Dashboard from "./index";

jest.mock("./screens/dashboard-screen", () => {
  const React = require("react");
  const { Text } = require("react-native");

  return function MockDashboardScreen() {
    return <Text>Mock Dashboard Screen</Text>;
  };
});

describe("Dashboard index", () => {
  it("renders dashboard screen inside container", () => {
    const { getByText } = render(<Dashboard />);

    expect(getByText("Mock Dashboard Screen")).toBeTruthy();
  });
});
