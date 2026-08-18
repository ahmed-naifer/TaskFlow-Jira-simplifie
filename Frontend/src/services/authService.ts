import axios from 'axios';
import type { AuthResponse, LoginPayload, RegisterPayload } from '../types/auth';

const API_URL = 'http://localhost:5000/auth';

export const register = async (payload: RegisterPayload): Promise<AuthResponse> => {
  const response = await axios.post<AuthResponse>(`${API_URL}/register`, payload);
  return response.data;
};

export const login = async (payload: LoginPayload): Promise<AuthResponse> => {
  const response = await axios.post<AuthResponse>(`${API_URL}/login`, payload);
  return response.data;
};