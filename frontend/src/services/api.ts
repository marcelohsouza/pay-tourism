import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000/api",
});

export const login = (email: string, password: string) => {
  return api.post<{ token: string }>("/auth/login", { email, password });
};

export const register = (name: string, email: string, password: string) => {
  return api.post<{ token: string }>("/auth/register", { name, email, password });
};

export default api;