import axios from 'axios';

const API_URL = 'http://192.168.1.6:8000';

export const registerUser = async (userData) =>
  (await axios.post(`${API_URL}/register`, userData)).data;

export const loginUser = async (userData) =>
  (await axios.post(`${API_URL}/login`, userData)).data;
