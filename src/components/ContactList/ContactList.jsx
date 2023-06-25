// Libs
import { useSelector } from 'react-redux';
// React components
import { ContactListItem } from 'components/ContactListItem/ContactListItem';
// Redux selectors
import { selectContacts } from 'redux/contacts/contactsSelectors';
import { selectFilter } from 'redux/filter/filterSelectors';
// Styled components
import { InfoMessage, List } from './ContactList.styled';

export const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  const filteredAndSortedContacts = contacts
    .filter(
      item =>
        item.name.toLowerCase().includes(filter.toLowerCase()) ||
        item.number.includes(filter)
    )
    .sort((a, b) => a.name.localeCompare(b.name));

  return (
    <>
      {filteredAndSortedContacts.length === 0 && (
        <InfoMessage>
          Contacts not found. Please, try to change your request.
        </InfoMessage>
      )}

      {filteredAndSortedContacts.length !== 0 && (
        <List>
          {filteredAndSortedContacts.map(({ id, name, number }) => {
            return (
              <ContactListItem
                key={id}
                id={id}
                contactName={name}
                contactNumber={number}
              />
            );
          })}
        </List>
      )}
    </>
  );
};
