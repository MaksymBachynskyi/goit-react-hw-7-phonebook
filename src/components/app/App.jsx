import { Filter } from 'components/filter/filter.jsx';
import { ContactList } from '../contactList/contactList.jsx';
import { ContactForm } from '../contactForm/contactForm.jsx';
import { Container } from './Layout.styled';
import { useSelector } from 'react-redux';
import { selectorContacts } from 'redux/sliceContacts.js';

export function App() {
  const contacts = useSelector(selectorContacts);

  return (
    <Container>
      <h1>Phonebook</h1>

      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      {contacts.list.length > 0 && <ContactList />}
    </Container>
  );
}
