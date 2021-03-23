import axios from 'axios';

const api = axios.create({
  baseURL: 'http://157.230.237.241/api',
});

export default api;
