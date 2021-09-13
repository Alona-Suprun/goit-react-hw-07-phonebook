import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
//import contactsActions from '../../redux/contacts/contacts-actions';
import contactOperations from '../../redux/contacts/contacts-operation';
import { getContactsList } from '../../redux/contacts/contacts-selectors';
import Contact from './Contact';
import s from './Contact.module.css';

const ContactList = ({ name, number }) => {
  const contacts = useSelector(getContactsList);
  //const isLoading = useSelector(getIsLoading);
  //const error = useSelector(getError);
  const dispatch = useDispatch();
  const onDeleteContact = id => dispatch(contactOperations.deleteContact(id));
  useEffect(() => dispatch(contactOperations.fetchContact()), [dispatch]);
  if (contacts === []) return null;
  // if (isLoading) return <h2>Loading...</h2>;
  //if (error) return <h1>{error}</h1>;
  return (
    <ul className={s.list}>
      {contacts.map(({ id, name, number }) => (
        <Contact
          key={id}
          name={name}
          number={number}
          onDeleteContact={() => onDeleteContact(id)}
        />
      ))}
    </ul>
  );
};

export default ContactList;
