import { render } from "@testing-library/react-native";
import React from "react";
import Notifications from "./index";

jest.mock("./screens/notifications-screen", () => {
  const React = require("react");
  const { Text } = require("react-native");

  return function MockNotificationsScreen() {
    return <Text>Mock Notifications Screen</Text>;
  };
});

describe("Notifications index", () => {
  it("renders notifications screen inside container", () => {
    const { getByText } = render(<Notifications />);

    expect(getByText("Mock Notifications Screen")).toBeTruthy();
  });
});
