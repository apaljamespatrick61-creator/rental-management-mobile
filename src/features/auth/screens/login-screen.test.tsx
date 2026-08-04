import { CommonActions, useNavigation } from "@react-navigation/native";
import { fireEvent, render } from "@testing-library/react-native";
import React from "react";
import LoginScreen from "./login-screen";

jest.mock("lucide-react-native", () => {
  const MockIcon = () => null;

  return {
    Building2: MockIcon,
    Lock: MockIcon,
    LogIn: MockIcon,
    Mail: MockIcon,
  };
});

jest.mock("@react-navigation/native", () => {
  const actual = jest.requireActual("@react-navigation/native");

  return {
    ...actual,
    useNavigation: jest.fn(),
  };
});

describe("LoginScreen", () => {
  it("resets to MainTabs when Sign In is pressed", () => {
    const dispatch = jest.fn();
    (useNavigation as jest.Mock).mockReturnValue({ dispatch });

    const { getByText } = render(<LoginScreen />);

    fireEvent.press(getByText("Sign In"));

    expect(dispatch).toHaveBeenCalledWith(
      CommonActions.reset({
        index: 0,
        routes: [{ name: "MainTabs" }],
      }),
    );
  });
});
