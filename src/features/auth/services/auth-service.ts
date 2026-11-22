import { httpClient } from "../../../services/http/client";
import { LoginFormValues } from "../model/login-schema";

export interface LoginResponse {
  token: string;
}

export async function login(
  credentials: LoginFormValues,
): Promise<LoginResponse> {
  const { data } = await httpClient.post<LoginResponse>(
    "/auth/login",
    credentials,
  );
  return data;
}
