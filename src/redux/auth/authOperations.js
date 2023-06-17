// Libs
import { createAsyncThunk } from '@reduxjs/toolkit';
// Services
import { signUp, signIn, signOut } from 'services/userApi';

export const register = createAsyncThunk(
  'auth/register',
  async (user, thunkAPI) => {
    try {
      return await signUp(user);
    } catch (error) {
      thunkAPI.rejectWithValue(error);
    }
  }
);

export const logIn = createAsyncThunk('auth/logIn', async (user, thunkAPI) => {
  try {
    return await signIn(user);
  } catch (error) {
    thunkAPI.rejectWithValue(error);
  }
});

export const logOut = createAsyncThunk('auth/logOut', async (_, thunkAPI) => {
  try {
    signOut();
  } catch (error) {
    thunkAPI.rejectWithValue(error);
  }
});
