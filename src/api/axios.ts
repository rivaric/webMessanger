import axios from 'axios';

export const PUBLIC_URL = 'http://0.0.0.0:8001';

export const $api = axios.create({
  baseURL: PUBLIC_URL
});

$api.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem('accses_token')}`;
  return config;
});
