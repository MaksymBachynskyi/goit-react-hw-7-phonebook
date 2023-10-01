import { StyledBtn, Wrapper } from './contactList.styled';
import { deleteContacts } from 'redux/sliceContacts';
import { useDispatch } from 'react-redux';
export const ContactList = ({ contacts, onDelete }) => {
  const dispatch = useDispatch();
  return (
    <div>
      {contacts.map(item => {
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
