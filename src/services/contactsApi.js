// Libs
import axios from 'axios';

export const getContacts = () =>
  axios.get('/contacts').then(response => response.data);

export const addNewContact = newContact =>
  axios.post('/contacts', newContact).then(response => response.data);

export const removeContact = id =>
  axios.delete(`/contacts/${id}`).then(response => response.data);

export const updateContact = (id, editedContact) =>
  axios.patch(`/contacts/${id}`, editedContact).then(response => response.data);
