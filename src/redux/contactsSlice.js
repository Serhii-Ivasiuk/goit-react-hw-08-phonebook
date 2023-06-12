// Libs
import { createSlice } from '@reduxjs/toolkit';
// Redux operations
import { fetchContacts, addContact, deleteContact } from './operations';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

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

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: builder => {
    // fetchContacts
    builder.addCase(fetchContacts.pending, handlePending);
    builder.addCase(fetchContacts.rejected, handleRejected);
    builder.addCase(fetchContacts.fulfilled, (state, action) => {
      resetErrorAndLoading(state);
      state.items = action.payload;
    });
    // addContact
    builder.addCase(addContact.pending, handlePending);
    builder.addCase(addContact.rejected, handleRejected);
    builder.addCase(addContact.fulfilled, (state, action) => {
      resetErrorAndLoading(state);
      state.items.push(action.payload);
    });
    // deleteContact
    builder.addCase(deleteContact.pending, handlePending);
    builder.addCase(deleteContact.rejected, handleRejected);
    builder.addCase(deleteContact.fulfilled, (state, action) => {
      resetErrorAndLoading(state);
      state.items = state.items.filter(item => item.id !== action.payload.id);
    });
  },
});

export const contactsReducer = contactsSlice.reducer;
