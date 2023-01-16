import axios from 'axios';

const BASE_URL = 'http://localhost:8000/api/';

const instance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});

instance.defaults.headers.common['Content-Type'] = 'application/json';

export { instance };
