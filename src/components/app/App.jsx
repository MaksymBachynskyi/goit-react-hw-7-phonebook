import { Filter } from 'components/filter/filter.jsx';
import { ContactList } from '../contactList/contactList.jsx';
import { ContactForm } from '../contactForm/contactForm.jsx';
import { Container } from './Layout.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectorContacts } from 'redux/selectors.js';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operation.js';

export function App() {
  const contacts = useSelector(selectorContacts);
  const { list, isLoading, error } = contacts;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <h1>Phonebook</h1>

      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      {isLoading && <p>Loading tasks...</p>}
      {error && <p>{contacts.error}</p>}
      {list.length > 0 && <ContactList />}
    </Container>
  );
}
