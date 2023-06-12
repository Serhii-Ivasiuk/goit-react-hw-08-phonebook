// Libs
import { configureStore } from '@reduxjs/toolkit';
// Redux reducers
import { contactsReducer } from 'redux/contactsSlice';
import { filterReducer } from 'redux/filterSlice';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
  },
});
