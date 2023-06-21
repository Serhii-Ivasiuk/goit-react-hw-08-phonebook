// Libs
import PropTypes from 'prop-types';
// Redux operations
import { deleteContact } from 'redux/contacts/contactsOperations';
// Styled components
import { ListItem, Text, Number, RemoveBtn } from './ContactListItem.styled';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

export const ContactListItem = ({ id, contactName, contactNumber }) => {
  const [isRemoving, setIsRemoving] = useState(false);
  const dispatch = useDispatch();

  const handleRemoveContact = () => {
    setIsRemoving(true);

    dispatch(deleteContact({ id, contactName })).finally(() => {
      setIsRemoving(false);
    });
  };

  return (
    <ListItem>
      <Text>
        {contactName}: <Number>{contactNumber}</Number>
      </Text>

      <RemoveBtn
        type="button"
        disabled={isRemoving}
        onClick={handleRemoveContact}
      >
        Remove
      </RemoveBtn>
    </ListItem>
  );
};

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  contactName: PropTypes.string.isRequired,
  contactNumber: PropTypes.string.isRequired,
};
