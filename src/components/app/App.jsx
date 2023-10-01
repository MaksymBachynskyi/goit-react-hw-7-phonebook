import { Filter } from 'components/filter/filter.jsx';
import { ContactList } from '../contactList/contactList.jsx';
import { ContactForm } from '../contactForm/contactForm.jsx';
import { Container } from './Layout.styled';
import { useSelector } from 'react-redux';
import { selectorContacts } from 'redux/sliceContacts.js';
export function App() {
  const contacts = useSelector(selectorContacts);
  const filter = useSelector(state => state.filter);

  const getFiltredMassive = () => {
    return contacts.list.filter(item => {
      const normalize = item.name.toLowerCase();
      const normalizeTarget = filter.toLowerCase();
      return normalize.includes(normalizeTarget);
    });
  };
  return (
    <Container>
      <h1>Phonebook</h1>

      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      {contacts.list.length > 0 && (
        <ContactList contacts={getFiltredMassive()} />
      )}
    </Container>
  );
}
