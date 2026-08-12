import { render } from "@testing-library/react-native";
import React from "react";
import Header from "./header";

describe("Header", () => {
  it("renders default user name", () => {
    const { getByText } = render(<Header />);

    expect(getByText("Welcome, John Doe!")).toBeTruthy();
  });

  it("renders provided user name", () => {
    const { getByText } = render(<Header name="Alex" />);

    expect(getByText("Welcome, Alex!")).toBeTruthy();
  });
});
