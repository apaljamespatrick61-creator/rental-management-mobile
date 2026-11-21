import { create } from "zustand";

export interface AuthState {
  isAuthenticated: boolean;
  email: string | null;
  signIn: (email: string) => void;
  signOut: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  isAuthenticated: false,
  email: null,
  signIn: (email) => set({ isAuthenticated: true, email }),
  signOut: () => set({ isAuthenticated: false, email: null }),
}));
