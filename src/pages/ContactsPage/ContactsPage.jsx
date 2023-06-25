// Libs
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
// React components
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';
import { CenteredLoader } from 'components/Loaders/Loaders';
// Redux selectors
import {
  selectContacts,
  selectError,
  selectIsLoading,
} from 'redux/contacts/contactsSelectors';
// Redux operations
import { fetchContacts } from 'redux/contacts/contactsOperations';
// Styled components
import {
  ContactsPageWrap,
  Section,
  MainTitle,
  SectionTitle,
  ContactsWrapper,
  InfoMessage,
  ErrorMessage,
} from './ContactsPage.styled';

export const ContactsPage = () => {
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts())
      .unwrap()
      .catch(() =>
        toast.error('Oops... Something went wrong :( Please try again later.')
      );
  }, [dispatch]);

  return (
    <ContactsPageWrap>
      <Section>
        <MainTitle>Phonebook</MainTitle>
        <ContactForm />
      </Section>

      <Section>
        <SectionTitle>Contacts</SectionTitle>
        <ContactsWrapper>
          {contacts.length !== 0 && (
            <>
              <Filter />
              <ContactList />
            </>
          )}

          {contacts.length === 0 && isLoading && <CenteredLoader />}

          {error && contacts.length === 0 && (
            <ErrorMessage>{error}</ErrorMessage>
          )}

          {!isLoading && !error && contacts.length === 0 && (
            <InfoMessage>
              There is no contacts yet. Use the form above to add your first
              contact.
            </InfoMessage>
          )}
        </ContactsWrapper>
      </Section>
    </ContactsPageWrap>
  );
};
