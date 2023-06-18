// Libs
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
// Services
import { signUp, signIn, signOut, getCurrentUser } from 'services/userApi';

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const response = await signUp(credentials);
      setAuthHeader(response.token);
      return response;
    } catch (error) {
      thunkAPI.rejectWithValue(error);
    }
  }
);

export const logIn = createAsyncThunk('auth/logIn', async (user, thunkAPI) => {
  try {
    const response = await signIn(user);
    setAuthHeader(response.token);
    return response;
  } catch (error) {
    thunkAPI.rejectWithValue(error);
  }
});

export const logOut = createAsyncThunk('auth/logOut', async (_, thunkAPI) => {
  try {
    await signOut();
    clearAuthHeader();
  } catch (error) {
    thunkAPI.rejectWithValue(error);
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
    thunkAPI.rejectWithValue(error);
  }
});
