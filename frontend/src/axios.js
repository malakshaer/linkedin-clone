import axios from "axios";

const BASE_URL = "localhost:8000/auth";

export const authApi = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Authorization: Boolean(localStorage.getItem("JWT"))
      ? `Bearer ${localStorage.getItem("JWT")}`
      : undefined,
  },
});

const api = axios.create({
  baseURL: BASE_URL,
});

export const request = ({ ...options }) => {
  return api(options)
    .then((response) => response)
    .catch((error) => error);
};
