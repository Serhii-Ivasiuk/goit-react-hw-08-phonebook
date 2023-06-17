import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const signUp = user =>
  axios.post('/users/signup', user).then(response => {
    setAuthHeader(response.data.token);
    return response.data;
  });

export const signIn = user =>
  axios.post('/users/login', user).then(response => {
    setAuthHeader(response.data.token);
    return response.data;
  });

export const signOut = token =>
  axios.post('/users/logout', token).then(response => {
    clearAuthHeader();
    return response.data;
  });
