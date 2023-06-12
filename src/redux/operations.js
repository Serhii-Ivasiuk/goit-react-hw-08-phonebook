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
      return await getContacts();
    } catch {
      return thunkAPI.rejectWithValue(ERROR_MESSAGE);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (newContact, thunkAPI) => {
    try {
      return await addNewContact(newContact);
    } catch {
      return thunkAPI.rejectWithValue(ERROR_MESSAGE);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, thunkAPI) => {
    try {
      return await removeContactById(id);
    } catch {
      return thunkAPI.rejectWithValue(ERROR_MESSAGE);
    }
  }
);
