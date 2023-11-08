import UserDataInterface from '@/models/userModel';
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://127.0.0.1:8000/users',
});

export const getAllUsers = async () => {
  const response = await api.get('');
  return response.data;
};

export const addUser = async (userData: UserDataInterface) => {
  const response = await api.post('', userData);
  return response.data;
};

export const deleteUser = async (userId: number) => {
  const response = await api.delete(`/${userId}`);
  return response.data;
};
