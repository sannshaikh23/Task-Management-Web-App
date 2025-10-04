import axios from 'axios';

const API_URL = 'http://127.0.0.1:8000/api/';

const axiosInstance = axios.create({
  baseURL: API_URL,
});

export const registerUser = (data) => axiosInstance.post('register/', data);
export const loginUser = (data) => axiosInstance.post('token/', data);
export const getProfile = (token) =>
  axiosInstance.get('profile/', { headers: { Authorization: `Bearer ${token}` } });

export const getTasks = (token) =>
  axiosInstance.get('tasks/', { headers: { Authorization: `Bearer ${token}` } });
export const createTask = (token, data) =>
  axiosInstance.post('tasks/', data, { headers: { Authorization: `Bearer ${token}` } });
export const updateTask = (token, id, data) =>
  axiosInstance.put(`tasks/${id}/`, data, { headers: { Authorization: `Bearer ${token}` } });
export const deleteTask = (token, id) =>
  axiosInstance.delete(`tasks/${id}/`, { headers: { Authorization: `Bearer ${token}` } });
