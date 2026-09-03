import { render } from "@testing-library/react-native";
import React from "react";
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
    const { getByText, getByPlaceholderText, getAllByPlaceholderText } = render(
      <ProfileDetails />,
    );

    expect(getByText("Alex Johnson")).toBeTruthy();
    expect(getByText("Unit 402b")).toBeTruthy();
    expect(getByText("Profile Details")).toBeTruthy();
    expect(getByText("Emergency Contact")).toBeTruthy();

    expect(getByPlaceholderText("Enter your email address")).toBeTruthy();
    expect(getAllByPlaceholderText("Enter your phone number").length).toBe(2);
    expect(getByPlaceholderText("Enter contact name")).toBeTruthy();

    expect(getByText("Edit Profile Photo")).toBeTruthy();
    expect(getByText("Logout")).toBeTruthy();
  });
});
