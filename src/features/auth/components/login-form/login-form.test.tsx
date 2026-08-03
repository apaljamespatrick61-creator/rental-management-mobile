import { render } from "@testing-library/react-native";
import React from "react";
import LoginForm from "./login-form";

jest.mock("lucide-react-native", () => {
  const MockIcon = () => null;

  return {
    Lock: MockIcon,
    LogIn: MockIcon,
    Mail: MockIcon,
  };
});

describe("LoginForm", () => {
  it("renders login fields and action", () => {
    const { getByText, getByPlaceholderText } = render(
      <LoginForm email="test@example.com" password="secret" />,
    );

    expect(getByText("Email Address:")).toBeTruthy();
    expect(getByText("Password:")).toBeTruthy();
    expect(getByPlaceholderText("example@example.com")).toBeTruthy();
    expect(getByPlaceholderText("********")).toBeTruthy();
    expect(getByText("Sign In")).toBeTruthy();
  });
});
