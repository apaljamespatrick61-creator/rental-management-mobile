import { CommonActions, useNavigation } from "@react-navigation/native";
import { fireEvent, render, waitFor } from "@testing-library/react-native";
import React from "react";
import { useLogin } from "../hooks/use-login";
import LoginScreen from "./login-screen";

jest.mock("../hooks/use-login", () => ({ useLogin: jest.fn() }));

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
  it("resets to MainTabs when Sign In is pressed with valid credentials", async () => {
    const dispatch = jest.fn();
    (useNavigation as jest.Mock).mockReturnValue({ dispatch });
    (useLogin as jest.Mock).mockReturnValue({
      mutate: jest.fn((_values, options) => options.onSuccess()),
      isError: false,
    });

    const { getByText, getByPlaceholderText } = render(<LoginScreen />);

    fireEvent.changeText(
      getByPlaceholderText("example@example.com"),
      "test@example.com",
    );
    fireEvent.changeText(getByPlaceholderText("********"), "secret");
    fireEvent.press(getByText("Sign In"));

    await waitFor(() =>
      expect(dispatch).toHaveBeenCalledWith(
        CommonActions.reset({
          index: 0,
          routes: [{ name: "MainTabs" }],
        }),
      ),
    );
  });
});
