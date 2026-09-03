import { render } from "@testing-library/react-native";
import React from "react";
import ProfileScreen from "./profile-screen";

jest.mock("lucide-react-native", () => {
  const MockIcon = () => null;

  return {
    Edit3: MockIcon,
    Info: MockIcon,
    UserRound: MockIcon,
    ShieldUser: MockIcon,
    LogOut: MockIcon,
  };
});

describe("ProfileScreen", () => {
  it("renders profile details content", () => {
    const { getByText } = render(<ProfileScreen />);

    expect(getByText("Profile Details")).toBeTruthy();
    expect(getByText("Emergency Contact")).toBeTruthy();
  });
});
