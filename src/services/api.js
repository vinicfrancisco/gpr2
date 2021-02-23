import axios from 'axios';

const api = axios.create({
  baseURL: 'http://157.245.86.100/api',
});

export default api;
