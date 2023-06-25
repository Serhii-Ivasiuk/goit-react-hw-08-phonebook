// Libs
import { createAsyncThunk } from '@reduxjs/toolkit';
// Services
import {
  getContacts,
  addNewContact,
  removeContact,
  updateContact,
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
  async (id, thunkAPI) => {
    try {
      return await removeContact(id);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const editContact = createAsyncThunk(
  'contacts/editContact',
  async ({ id, changes }, thunkAPI) => {
    try {
      return await updateContact(id, changes);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
