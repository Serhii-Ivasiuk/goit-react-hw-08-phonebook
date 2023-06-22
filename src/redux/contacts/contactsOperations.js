// Libs
import { createAsyncThunk } from '@reduxjs/toolkit';
// Services
import {
  getContacts,
  addNewContact,
  removeContactById,
} from 'services/contactsApi';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      return await getContacts();
    } catch {
      return thunkAPI.rejectWithValue('Failed to load contacts.');
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (newContact, thunkAPI) => {
    try {
      return await addNewContact(newContact);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async ({ id }, thunkAPI) => {
    try {
      return await removeContactById(id);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
