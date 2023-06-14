// Libs
import { useSelector } from 'react-redux';
// React components
import { ContactListItem } from 'components/ContactListItem/ContactListItem';
// Redux selectors
import { getContacts, getFilter } from 'redux/selectors';
// Styled components
import { InfoMessage, List } from './ContactList.styled';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

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
              id={id}
              contactName={name}
              contactNumber={phone}
            />
          );
        })}
      </List>
    </>
  );
};
