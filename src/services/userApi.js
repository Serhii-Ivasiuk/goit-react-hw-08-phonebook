import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const signUp = user =>
  axios.post('/users/signup', user).then(res => res.data);

export const signIn = user =>
  axios.post('/users/login', user).then(res => res.data);

export const signOut = token =>
  axios.post('/users/logout', token).then(res => res.data);

export const getCurrentUser = () =>
  axios.get('/users/current').then(res => res.data);
