import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'localhost:9001/',
});
