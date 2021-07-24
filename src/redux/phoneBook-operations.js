import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

import {
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
} from './phoneBook-actions';

axios.defaults.baseURL = 'http://localhost:4040';

const addContact = newContact => dispatch => {
  const contact = {
    id: uuidv4(),
    name: newContact.name,
    number: newContact.number,
  };

  dispatch(addContactRequest());

  axios
    .post('/contacts', contact)
    .then(({ data }) => dispatch(addContactSuccess(data)))
    .catch(erorr => dispatch(addContactError(erorr)));
};

const deleteContact = contactId => dispatch => {
  dispatch(deleteContactRequest());

  axios
    .delete(`/contacts/${contactId}`)
    .then(() => dispatch(deleteContactSuccess(contactId)))
    .catch(error => dispatch(deleteContactError(error)));
};

const fetchContacts = () => async dispatch => {
  dispatch(fetchContactsRequest());

  try {
    const response = await axios.get('/contacts');
    dispatch(fetchContactsSuccess(response.data));
  } catch (error) {
    dispatch(fetchContactsError(error));
  }
};
export default {
  addContact,
  deleteContact,
  fetchContacts,
};
