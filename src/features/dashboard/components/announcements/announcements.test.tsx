import { render } from "@testing-library/react-native";
import React from "react";
import Announcements from "./announcements";

jest.mock("lucide-react-native", () => {
  const MockIcon = () => null;

  return {
    Megaphone: MockIcon,
  };
});

describe("Announcements", () => {
  it("renders announcements title", () => {
    const { getByText } = render(<Announcements />);

    expect(getByText("Announcements")).toBeTruthy();
  });
});
