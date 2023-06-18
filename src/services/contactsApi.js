// Libs
import axios from 'axios';

export const getContacts = () =>
  axios.get('/contacts').then(response => response.data);

export const addNewContact = newContact =>
  axios.post('/contacts', newContact).then(response => response.data);

export const removeContactById = id =>
  axios.delete(`/contacts/${id}`).then(response => response.data);
