import { fireEvent, render, waitFor } from "@testing-library/react-native";
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

  it("calls onSignIn with valid credentials when Sign In is pressed", async () => {
    const onSignIn = jest.fn();
    const { getByText, getByPlaceholderText } = render(
      <LoginForm onSignIn={onSignIn} />,
    );

    fireEvent.changeText(
      getByPlaceholderText("example@example.com"),
      "test@example.com",
    );
    fireEvent.changeText(getByPlaceholderText("********"), "secret");
    fireEvent.press(getByText("Sign In"));

    await waitFor(() =>
      expect(onSignIn).toHaveBeenCalledWith({
        email: "test@example.com",
        password: "secret",
      }),
    );
  });

  it("shows validation errors and does not call onSignIn for empty fields", async () => {
    const onSignIn = jest.fn();
    const { getByText, findByText } = render(<LoginForm onSignIn={onSignIn} />);

    fireEvent.press(getByText("Sign In"));

    expect(await findByText("Email is required")).toBeTruthy();
    expect(getByText("Password is required")).toBeTruthy();
    expect(onSignIn).not.toHaveBeenCalled();
  });
});
