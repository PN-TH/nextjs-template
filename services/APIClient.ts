import axios from 'axios';

const API = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  withCredentials: true,
  headers: {
    appId: process.env.REACT_APP_APP_ID as string,
    appPassword: process.env.REACT_APP_APP_PASSWORD as string,
    authorization: `Bearer `
  }
});

export default API;
