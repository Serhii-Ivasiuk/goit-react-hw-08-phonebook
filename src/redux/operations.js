// Libs
import { createAsyncThunk } from '@reduxjs/toolkit';
// Services
import {
  getContacts,
  addNewContact,
  removeContactById,
} from 'services/contactsApi';

const ERROR_MESSAGE = 'Oops... Something went wrong :( Please try again later.';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await getContacts();
      return response;
    } catch {
      return thunkAPI.rejectWithValue(ERROR_MESSAGE);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (newContact, thunkAPI) => {
    try {
      const response = await addNewContact(newContact);
      return response;
    } catch {
      return thunkAPI.rejectWithValue(ERROR_MESSAGE);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, thunkAPI) => {
    try {
      const response = await removeContactById(id);
      return response;
    } catch {
      return thunkAPI.rejectWithValue(ERROR_MESSAGE);
    }
  }
);
