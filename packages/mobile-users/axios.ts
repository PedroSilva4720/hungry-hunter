import axios from 'axios';
import { decode, encode } from 'base-64';

if (!global.btoa) {
  global.btoa = encode;
}

if (!global.atob) {
  global.atob = decode;
}

export const axiosInstance = axios.create({
  baseURL: 'http://localhost:9001/',
});
