import { CommonActions, useNavigation } from "@react-navigation/native";
import { useCallback } from "react";
import { queryClient } from "../../../services/query/query-client";
import { secureStorage } from "../../../services/storage/secure-storage";
import { useAuthStore } from "../model/auth-store";

export function useLogout() {
  const navigation = useNavigation<any>();

  return useCallback(async () => {
    await secureStorage.removeItem("authToken");
    useAuthStore.getState().signOut();
    queryClient.clear();
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{ name: "Auth" }],
      }),
    );
  }, [navigation]);
}
