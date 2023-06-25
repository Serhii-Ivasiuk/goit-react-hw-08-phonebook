// Libs
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { ImPhone, ImCross, ImPencil } from 'react-icons/im';
import PropTypes from 'prop-types';
// Redux operations
import { deleteContact } from 'redux/contacts/contactsOperations';
// React components
import { CenteredLoader } from 'components/Loaders/Loaders';
// Styled components
import {
  ListItem,
  Name,
  Number,
  ActionsWrap,
  CallLink,
  EditBtn,
  RemoveBtn,
  ContactWrap,
} from './ContactListItem.styled';
import { EditContactForm } from 'components/EditContactForm/EditContactForm';
import { Modal } from 'components/Modal/Modal';

export const ContactListItem = ({ id, contactName, contactNumber }) => {
  const [isRemoving, setIsRemoving] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleRemoveContact = () => {
    setIsRemoving(true);

    dispatch(deleteContact(id))
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
    <>
      <ListItem>
        <ContactWrap>
          <Name>{contactName}:</Name>
          <Number>{contactNumber}</Number>
        </ContactWrap>

        <ActionsWrap>
          <CallLink href={`tel:${contactNumber}`}>
            <ImPhone />
          </CallLink>

          <EditBtn type="button" onClick={handleModalOpen}>
            <ImPencil />
          </EditBtn>

          <RemoveBtn
            type="button"
            disabled={isRemoving}
            onClick={handleRemoveContact}
          >
            {isRemoving ? <CenteredLoader /> : <ImCross />}
          </RemoveBtn>
        </ActionsWrap>
      </ListItem>

      {isModalOpen && (
        <Modal handleModalClose={handleModalClose}>
          <EditContactForm
            id={id}
            contactName={contactName}
            contactNumber={contactNumber}
            handleModalClose={handleModalClose}
          />
        </Modal>
      )}
    </>
  );
};

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  contactName: PropTypes.string.isRequired,
  contactNumber: PropTypes.string.isRequired,
};
