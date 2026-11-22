import { render } from "@testing-library/react-native";
import React from "react";
import Skeleton from "./skeleton";

describe("Skeleton", () => {
  it("renders and unmounts without errors", () => {
    const { toJSON, unmount } = render(<Skeleton width={120} height={20} />);

    expect(toJSON()).not.toBeNull();
    expect(() => unmount()).not.toThrow();
  });
});
