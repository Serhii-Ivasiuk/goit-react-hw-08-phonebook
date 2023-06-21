// Libs
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';
// Services
import { signUp, signIn, signOut, getCurrentUser } from 'services/userApi';

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const registerUser = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const response = await signUp(credentials);
      toast.success(`User "${response.user.name}" is successfully registered.`);
      setAuthHeader(response.token);
      return response;
    } catch (error) {
      toast.error('Registration error, please try again.');
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const logIn = createAsyncThunk('auth/logIn', async (user, thunkAPI) => {
  try {
    const response = await signIn(user);
    toast.success(`Wellcome, ${response.user.name}!`);
    setAuthHeader(response.token);
    return response;
  } catch (error) {
    toast.error('Login error - wrong email or password.');
    return thunkAPI.rejectWithValue(error);
  }
});

export const logOut = createAsyncThunk('auth/logOut', async (_, thunkAPI) => {
  try {
    await signOut();
    clearAuthHeader();
  } catch (error) {
    toast.error('Logout error, please try again.');
    return thunkAPI.rejectWithValue(error);
  }
});

export const refresh = createAsyncThunk('auth/refresh', async (_, thunkAPI) => {
  const state = thunkAPI.getState();
  const persistedToken = state.auth.token;

  if (persistedToken === null) {
    return thunkAPI.rejectWithValue('Unable to fetch user');
  }

  try {
    setAuthHeader(persistedToken);
    return await getCurrentUser();
  } catch (error) {
    toast.error('Oops... Something went wrong :( Please try again later.');
    return thunkAPI.rejectWithValue(error.message);
  }
});
