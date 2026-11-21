import { render } from "@testing-library/react-native";
import React from "react";
import { StyleSheet } from "react-native";
import { colors } from "../../../../shared/constants/theme";
import ProfileDetails from "./index";

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

describe("ProfileDetails", () => {
  it("renders profile sections, placeholders, and actions", () => {
    const { getByText, getByPlaceholderText } = render(<ProfileDetails />);

    expect(getByText("Alex Johnson")).toBeTruthy();
    expect(getByText("Unit 402b")).toBeTruthy();
    expect(getByText("Profile Details")).toBeTruthy();
    expect(getByText("Emergency Contact")).toBeTruthy();

    expect(getByPlaceholderText("Enter your email address")).toBeTruthy();
    expect(getByPlaceholderText("Enter your phone number")).toBeTruthy();
    expect(getByPlaceholderText("Enter contact name")).toBeTruthy();
    expect(getByPlaceholderText("Enter phone number")).toBeTruthy();

    expect(getByText("Edit Profile Photo")).toBeTruthy();
    expect(getByText("Save Changes")).toBeTruthy();
    expect(getByText("Logout")).toBeTruthy();
  });

  it("renders the Save Changes button with primary text color", () => {
    const { getByText } = render(<ProfileDetails />);

    const saveText = StyleSheet.flatten(getByText("Save Changes").props.style);

    expect(saveText.color).toBe(colors.primary);
  });
});
