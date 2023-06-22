// Libs
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
// Redux operations
import { deleteContact } from 'redux/contacts/contactsOperations';
// react components
import { CenteredLoader } from 'components/Loaders/Loaders';
// Styled components
import { ListItem, Text, Number, RemoveBtn } from './ContactListItem.styled';

export const ContactListItem = ({ id, contactName, contactNumber }) => {
  const [isRemoving, setIsRemoving] = useState(false);
  const dispatch = useDispatch();

  const handleRemoveContact = () => {
    setIsRemoving(true);

    dispatch(deleteContact({ id }))
      .unwrap()
      .then(response =>
        toast.success(`Contact "${response.name}" is successfully removed.`)
      )
      .catch(() =>
        toast.error('Oops... Something went wrong :( Please try again later.')
      )
      .finally(() => {
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
        {isRemoving ? <CenteredLoader /> : 'Remove'}
      </RemoveBtn>
    </ListItem>
  );
};

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  contactName: PropTypes.string.isRequired,
  contactNumber: PropTypes.string.isRequired,
};
