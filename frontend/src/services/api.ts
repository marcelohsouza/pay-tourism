import axios from 'axios';

const api = axios.create({
    baseURL: "http://localhost:3000",
})

export interface User {
    name: string;
    email: string;
    password: string;
    role: string;
}

export interface Agency {
    id?: number;
    Name: string;
    cnpj: string;
    stateRegistration: string;
    status: string;
    foundingDate: string;
}

export const login = (email: string, password: string) => 
    api.post<{token: string}>("/auth/login", { email, password});

export const register = (data: User) =>
    api.post("/auth/register", data);

export const getAgencies = () => api.get<Agency[]>("/agencies")

export default api;