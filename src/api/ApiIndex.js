import axios from 'axios';

const API = axios.create({ baseURL: process.env.REACT_APP_API });

API.interceptors.request.use((req) => {
  if (localStorage.getItem('profile')) {
    req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
  }
  return req;
});

export const getAllRoutes = () => API.get(`/getAlldb`);
export const getRouteById = (id) => API.get(`/getById/pois/${id}`);
export const getAllPois = () => API.get(`/pois`);
export const getRoutesById = (id) => API.get(`/getById/${id}`);
export const getRoutes = (newPost) => API.get('/');

export const signIn = (formData) => API.post('/users/login', formData);
export const signUp = (formData) => API.post('/users', formData);
export const logout = (formData) => API.put('/logout', formData);
export const getAllUsers = () => API.get('/getAll');