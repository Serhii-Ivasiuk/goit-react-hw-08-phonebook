// Libs
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
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
      toast.error(ERROR_MESSAGE);
      return thunkAPI.rejectWithValue('Failed to load contacts.');
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (newContact, thunkAPI) => {
    try {
      const response = await addNewContact(newContact);
      toast.success(`Contact "${newContact.name}" is successfully added.`);
      return response;
    } catch (error) {
      toast.error(ERROR_MESSAGE);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async ({ id, contactName }, thunkAPI) => {
    try {
      const response = await removeContactById(id);
      toast.success(`Contact "${contactName}" is successfully removed.`);
      return response;
    } catch (error) {
      toast.error(ERROR_MESSAGE);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
