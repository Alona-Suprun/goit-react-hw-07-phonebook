import axios from 'axios';
import {
  fetchContactRequest,
  fetchContactSuccess,
  fetchContactError,
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
} from './contacts-actions';

axios.defaults.baseURL = 'http://localhost:3000/';

const fetchContact = () => async dispatch => {
  dispatch(fetchContactRequest());
  try {
    const { data } = await axios.get('contacts');
    dispatch(fetchContactSuccess(data));
  } catch (error) {
    dispatch(fetchContactError());
  }
};

const addContact = item => async dispatch => {
  dispatch(addContactRequest);
  try {
    const { data } = await axios.post('contacts', item);
    dispatch(addContactSuccess(data));
  } catch (error) {
    dispatch(addContactError());
  }
};

const deleteContact = contactsId => async dispatch => {
  deleteContactRequest();
  try {
    await axios.delete(`contacts/${contactsId}`);
    dispatch(deleteContactSuccess(contactsId));
  } catch (error) {
    dispatch(deleteContactError(error));
  }
};

const contactOperations = { fetchContact, addContact, deleteContact };
export default contactOperations;
