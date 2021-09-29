import axios, { AxiosInstance } from 'axios';

const axiosInstance:AxiosInstance = axios.create({
  baseURL: 'http://localhst:8080',
  timeout: 60000,
  withCredentials: true,
});

axiosInstance.defaults.headers.common['mode'] = 'no-cors';
axiosInstance.defaults.headers.common['Content-Type'] = 'application/json';

export default axiosInstance;
