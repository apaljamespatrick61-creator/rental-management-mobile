import { render } from "@testing-library/react-native";
import React from "react";
import AuthHeader from "./auth-header";

jest.mock("lucide-react-native", () => {
  const MockIcon = () => null;

  return {
    Building2: MockIcon,
  };
});

describe("AuthHeader", () => {
  it("renders the header with title and welcome message", () => {
    const { getByText } = render(<AuthHeader />);

    expect(getByText("Tenant Portal")).toBeTruthy();
    expect(
      getByText("Welcome back. Please sign in to manage your residence"),
    ).toBeTruthy();
  });
});
