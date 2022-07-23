import axios from 'axios';

const API = axios.create({ baseURL: process.env.REACT_APP_API });

API.interceptors.request.use((req) => {
  if (localStorage.getItem('user')) {
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('user')).token}`;
  }
  return req;
});

export const getAllRoutes = () => API.get(`/getAlldb`);
export const getRouteById = (id) => API.get(`/getById/pois/${id}`);
export const getAllPois = () => API.get(`/pois`);
export const getRoutesById = (id) => API.get(`/getById/${id}`);
export const getRoutes = () => API.get('/');
export const likeRoute = (id) => API.put(`/routes/likes/${id}`);
export const dislikeRoute = (id) => API.put(`/routes/dislike/${id}`);

export const signIn = (formData) => API.post('/users/login', formData);
export const signUp = (formData) => API.post('/users', formData);
export const logout = (formData) => API.put('/logout', formData);
export const getAllUsers = () => API.get('/getAll');