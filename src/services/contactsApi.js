// Libs
import axios from 'axios';

axios.defaults.baseURL = 'https://64849eb7ee799e321626def8.mockapi.io';

export const getContacts = () =>
  axios.get('/contacts').then(response => response.data);

export const addNewContact = newContact =>
  axios.post('/contacts', newContact).then(response => response.data);

export const removeContactById = id =>
  axios.delete(`/contacts/${id}`).then(response => response.data);
