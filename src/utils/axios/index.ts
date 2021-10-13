import axios, { AxiosInstance } from 'axios';

const axiosInstance:AxiosInstance = axios.create({
  baseURL: 'http://localhost:8080',
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '127.0.0.1',
    'mode': 'no-cors'
  },
  timeout: 60000,
  withCredentials: true,
});

export default axiosInstance;
