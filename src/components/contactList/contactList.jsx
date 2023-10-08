import { StyledBtn, Wrapper } from './contactList.styled';
import { deleteContacts } from 'redux/operation';
import { useDispatch, useSelector } from 'react-redux';

import {
  selectorContacts,
  selectorFilter,
  selectorFiltred,
} from 'redux/selectors';
export const ContactList = () => {
  const contacts = useSelector(selectorFiltred);

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
