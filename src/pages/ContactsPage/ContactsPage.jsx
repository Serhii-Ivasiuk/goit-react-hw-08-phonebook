// Libs
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
// React components
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';
// Redux selectors
import {
  getContacts,
  getError,
  getIsLoading,
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
  const contacts = useSelector(getContacts);
  const loading = useSelector(getIsLoading);
  const error = useSelector(getError);

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

          {loading && <InfoMessage>Loading...</InfoMessage>}

          {error && contacts.length === 0 && (
            <ErrorMessage>{error}</ErrorMessage>
          )}

          {!loading && !error && contacts.length === 0 && (
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
