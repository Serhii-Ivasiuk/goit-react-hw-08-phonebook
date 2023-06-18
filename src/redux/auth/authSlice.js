// Libs
import { createSlice } from '@reduxjs/toolkit';
// Redux operations
import { register, logIn, logOut, refresh } from './authOperations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isLoading: false,
  error: null,
  isRefreshing: false,
};

const isPendingAction = action => action.type.endsWith('/pending');

const isRejectedAction = action => action.type.endsWith('/rejected');

const handlePending = state => {
  state.isLoading = true;
  state.error = null;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const handleRegisterFulfilled = (state, action) => {
  state.isLoading = false;
  state.user = action.payload.user;
  state.token = action.payload.token;
  state.isLoggedIn = true;
};

const handleLogInFulfilled = (state, action) => {
  state.isLoading = false;
  state.user = action.payload.user;
  state.token = action.payload.token;
  state.isLoggedIn = true;
};

const handleLogOutFulfilled = state => {
  state.isLoading = false;
  state.user = { name: null, email: null };
  state.token = null;
  state.isLoggedIn = false;
};

const handleRefreshFulfilled = (state, action) => {
  state.isLoading = false;
  state.user = action.payload;
  state.isLoggedIn = true;
  state.isRefreshing = false;
};

const handleRefreshPending = state => {
  state.isRefreshing = true;
};

const handleRefreshRejected = state => {
  state.isRefreshing = false;
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(register.fulfilled, handleRegisterFulfilled)
      .addCase(logIn.fulfilled, handleLogInFulfilled)
      .addCase(logOut.fulfilled, handleLogOutFulfilled)
      .addCase(refresh.fulfilled, handleRefreshFulfilled)
      .addCase(refresh.pending, handleRefreshPending)
      .addCase(refresh.rejected, handleRefreshRejected)
      .addMatcher(isPendingAction, handlePending)
      .addMatcher(isRejectedAction, handleRejected);
  },
});

export const authReducer = authSlice.reducer;
