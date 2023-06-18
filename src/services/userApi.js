import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const signUp = user =>
  axios.post('/users/signup', user).then(response => response.data);

export const signIn = user =>
  axios.post('/users/login', user).then(response => response.data);

export const signOut = token =>
  axios.post('/users/logout', token).then(response => response.data);

export const getCurrentUser = () =>
  axios.get('/users/current').then(response => response.data);
