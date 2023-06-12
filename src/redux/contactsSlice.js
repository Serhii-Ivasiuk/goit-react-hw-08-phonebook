// Libs
import { createSlice } from '@reduxjs/toolkit';
// Redux operations
import { fetchContacts, addContact, deleteContact } from './operations';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const isPendingAction = action => action.type.endsWith('/pending');

const isRejectedAction = action => action.type.endsWith('/rejected');

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.error = action.payload;
  state.isLoading = false;
};

const resetErrorAndLoading = state => {
  state.error = null;
  state.isLoading = false;
};

const handleFetchContactsFulfilled = (state, action) => {
  resetErrorAndLoading(state);
  state.items = action.payload;
};

const handleAddContactFulfilled = (state, action) => {
  resetErrorAndLoading(state);
  state.items.push(action.payload);
};

const handleDeleteContactFulfilled = (state, action) => {
  resetErrorAndLoading(state);
  state.items = state.items.filter(item => item.id !== action.payload.id);
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.fulfilled, handleFetchContactsFulfilled)
      .addCase(addContact.fulfilled, handleAddContactFulfilled)
      .addCase(deleteContact.fulfilled, handleDeleteContactFulfilled)
      .addMatcher(isPendingAction, handlePending)
      .addMatcher(isRejectedAction, handleRejected);
  },
});

export const contactsReducer = contactsSlice.reducer;
