// Libs
import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { ImCross } from 'react-icons/im';
import PropTypes from 'prop-types';
// Styled components
import { Overlay, ModalWindow, CloseBtn } from './Modal.styled';

export const Modal = ({ handleModalClose, children }) => {
  useEffect(() => {
    const handleEscKeydown = evt => {
      const KEY_CODE = 'Escape';

      if (evt.key === KEY_CODE) {
        handleModalClose();
      }
    };

    document.addEventListener('keydown', handleEscKeydown);
    document.documentElement.style.overflowY = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleEscKeydown);
      document.documentElement.style.overflowY = 'unset';
    };
  }, [handleModalClose]);

  const handleBackdropClick = evt => {
    if (evt.target === evt.currentTarget) {
      handleModalClose();
    }
  };

  const backdropRootPortal = document.querySelector('#backdrop-root');

  return createPortal(
    <Overlay onClick={handleBackdropClick}>
      <ModalWindow>
        <CloseBtn onClick={handleModalClose}>
          <ImCross size={12} />
        </CloseBtn>
        {children}
      </ModalWindow>
    </Overlay>,
    backdropRootPortal
  );
};

Modal.propTypes = {
  handleModalClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};
