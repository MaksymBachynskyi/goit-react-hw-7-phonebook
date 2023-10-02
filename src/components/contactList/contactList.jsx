import { StyledBtn, Wrapper } from './contactList.styled';
import { deleteContacts, selectorContacts } from 'redux/sliceContacts';
import { useDispatch } from 'react-redux';
import { selectorFilter } from 'redux/sliceFilter';
import { useSelector } from 'react-redux';
export const ContactList = () => {
  const contacts = useSelector(selectorContacts);
  const filter = useSelector(selectorFilter);
  const dispatch = useDispatch();
  const getFiltredarray = () => {
    return contacts.list.filter(item => {
      const normalize = item.name.toLowerCase();
      const normalizeTarget = filter.toLowerCase();
      return normalize.includes(normalizeTarget);
    });
  };
  return (
    <div>
      {getFiltredarray().map(item => {
        return (
          <Wrapper key={item.id}>
            {item.name}: {item.number}
            <StyledBtn onClick={() => dispatch(deleteContacts(item.id))}>
              Delete
            </StyledBtn>
          </Wrapper>
        );
      })}
    </div>
  );
};
