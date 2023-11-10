import { UserRequest } from '@/models/userModel';
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://127.0.0.1:8000',
});

export const getAllUsers = async () => {
  const response = await api.get('/api/users');
  return response.data;
};

export const addUser = async (userData: UserRequest) => {
  const response = await api.post('/api/users', userData);
  return response.data;
};

export const deleteUser = async (userId: number) => {
  const response = await api.delete(`/api/users/${userId}`);
  return response.data;
};