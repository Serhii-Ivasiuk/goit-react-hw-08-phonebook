// Libs
import { useDispatch, useSelector } from 'react-redux';
// React components
import { ContactListItem } from 'components/ContactListItem/ContactListItem';
// Redux selectors
import { getContacts, getFilter } from 'redux/selectors';
// Redux operations
import { deleteContact } from 'redux/operations';
// Styled components
import { InfoMessage, List } from './ContactList.styled';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const handleRemoveContact = id => {
    dispatch(deleteContact(id));
  };

  const filteredAndSortedContacts = contacts
    .filter(item => item.name.toLowerCase().includes(filter.toLowerCase()))
    .sort((a, b) => a.name.localeCompare(b.name));

  return (
    <>
      {filteredAndSortedContacts.length === 0 && (
        <InfoMessage>
          Contacts not found. Please, try to change your request.
        </InfoMessage>
      )}

      <List>
        {filteredAndSortedContacts.map(({ id, name, phone }) => {
          return (
            <ContactListItem
              key={id}
              contactName={name}
              contactNumber={phone}
              onClick={() => handleRemoveContact(id)}
            />
          );
        })}
      </List>
    </>
  );
};
