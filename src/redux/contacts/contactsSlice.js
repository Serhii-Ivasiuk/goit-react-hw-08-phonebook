// Libs
import { createSlice } from '@reduxjs/toolkit';
// Redux operations
import {
  fetchContacts,
  addContact,
  deleteContact,
  editContact,
} from './contactsOperations';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const isPendingAction = action =>
  action.type.endsWith('/pending') && action.type.includes('contacts');

const isRejectedAction = action =>
  action.type.endsWith('/rejected') && action.type.includes('contacts');

const handlePending = state => {
  state.isLoading = true;
  state.error = null;
};

const handleRejected = (state, action) => {
  state.error = action.payload;
  state.isLoading = false;
};

const handleFetchContactsFulfilled = (state, action) => {
  state.error = null;
  state.items = action.payload;
  state.isLoading = false;
};

const handleAddContactFulfilled = (state, action) => {
  state.error = null;
  state.items.push(action.payload);
  state.isLoading = false;
};

const handleDeleteContactFulfilled = (state, action) => {
  state.error = null;
  state.items = state.items.filter(item => item.id !== action.payload.id);
  state.isLoading = false;
};

const handleEditContactFulfilled = (state, action) => {
  state.error = null;
  state.items = state.items.map(item => {
    if (item.id === action.payload.id) {
      return (item = action.payload);
    } else {
      return item;
    }
  });
  state.isLoading = false;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.fulfilled, handleFetchContactsFulfilled)
      .addCase(addContact.fulfilled, handleAddContactFulfilled)
      .addCase(deleteContact.fulfilled, handleDeleteContactFulfilled)
      .addCase(editContact.fulfilled, handleEditContactFulfilled)
      .addMatcher(isPendingAction, handlePending)
      .addMatcher(isRejectedAction, handleRejected);
  },
});

export const contactsReducer = contactsSlice.reducer;
