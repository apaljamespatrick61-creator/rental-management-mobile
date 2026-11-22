import axios from "axios";
import { secureStorage } from "../storage/secure-storage";

export const httpClient = axios.create({
  baseURL: process.env.EXPO_PUBLIC_API_URL,
  timeout: 10000,
  headers: { "Content-Type": "application/json" },
});

httpClient.interceptors.request.use(async (config) => {
  const token = await secureStorage.getItem("authToken");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

httpClient.interceptors.response.use(
  (response) => response,
  (error) => {
    error.message = error.response?.data?.message ?? error.message;
    return Promise.reject(error);
  },
);
