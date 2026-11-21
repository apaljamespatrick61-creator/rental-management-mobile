import { useAuthStore } from "./auth-store";

describe("useAuthStore", () => {
  beforeEach(() => {
    useAuthStore.setState({ isAuthenticated: false, email: null });
  });

  it("starts signed out", () => {
    const { isAuthenticated, email } = useAuthStore.getState();

    expect(isAuthenticated).toBe(false);
    expect(email).toBeNull();
  });

  it("stores the email and marks the user as authenticated on signIn", () => {
    useAuthStore.getState().signIn("tenant@example.com");

    const { isAuthenticated, email } = useAuthStore.getState();

    expect(isAuthenticated).toBe(true);
    expect(email).toBe("tenant@example.com");
  });

  it("clears the session on signOut", () => {
    useAuthStore.getState().signIn("tenant@example.com");
    useAuthStore.getState().signOut();

    const { isAuthenticated, email } = useAuthStore.getState();

    expect(isAuthenticated).toBe(false);
    expect(email).toBeNull();
  });
});
