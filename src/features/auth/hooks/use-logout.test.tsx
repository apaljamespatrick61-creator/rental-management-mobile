import { CommonActions } from "@react-navigation/native";
import { act, renderHook } from "@testing-library/react-native";
import { queryClient } from "../../../services/query/query-client";
import { secureStorage } from "../../../services/storage/secure-storage";
import { useAuthStore } from "../model/auth-store";
import { useLogout } from "./use-logout";

const mockDispatch = jest.fn();

jest.mock("@react-navigation/native", () => ({
  ...jest.requireActual("@react-navigation/native"),
  useNavigation: () => ({ dispatch: mockDispatch }),
}));

describe("useLogout", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    useAuthStore.setState({ isAuthenticated: true, email: "a@b.com" });
  });

  it("clears the session and resets navigation to Auth", async () => {
    const removeSpy = jest.spyOn(secureStorage, "removeItem");
    const clearSpy = jest.spyOn(queryClient, "clear");
    const { result } = renderHook(() => useLogout());

    await act(async () => {
      await result.current();
    });

    expect(removeSpy).toHaveBeenCalledWith("authToken");
    expect(clearSpy).toHaveBeenCalled();
    expect(useAuthStore.getState().isAuthenticated).toBe(false);
    expect(mockDispatch).toHaveBeenCalledWith(
      CommonActions.reset({ index: 0, routes: [{ name: "Auth" }] }),
    );
  });
});
