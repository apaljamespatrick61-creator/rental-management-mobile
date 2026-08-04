import { render } from "@testing-library/react-native";
import React from "react";
import Footer from "./footer";

describe("Footer", () => {
  it("renders the footer with copyright text", () => {
    const { getByText } = render(<Footer />);
    expect(getByText("Don't have an account?")).toBeTruthy();
    expect(getByText("Contact your property manager")).toBeTruthy();
  });
});
