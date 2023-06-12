// Libs
import PropTypes from 'prop-types';
// Styled components
import { ListItem, Text, Number, RemoveBtn } from './ContactListItem.styled';
import { useSelector } from 'react-redux';
import { getIsLoading } from 'redux/selectors';

export const ContactListItem = ({ contactName, contactNumber, onClick }) => {
  const loading = useSelector(getIsLoading);

  return (
    <ListItem>
      <Text>
        {contactName}: <Number>{contactNumber}</Number>
      </Text>

      <RemoveBtn type="button" disabled={loading} onClick={onClick}>
        Remove
      </RemoveBtn>
    </ListItem>
  );
};

ContactListItem.propTypes = {
  contactName: PropTypes.string.isRequired,
  contactNumber: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
