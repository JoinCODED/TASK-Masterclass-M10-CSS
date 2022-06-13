import axios from "axios";

export const getApiUrl = (): string => {
  if (process.env.NODE_ENV === "development") {
    return "http://localhost:8000";
  }
  return "https://api.example.com";
};

export const API = axios.create({
  baseURL: getApiUrl(),
});
