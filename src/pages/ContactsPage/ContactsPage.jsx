// Libs
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// React components
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';
// Redux selectors
import { getContacts, getError, getIsLoading } from 'redux/selectors';
// Redux operations
import { fetchContacts } from 'redux/operations';
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
    dispatch(fetchContacts());
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

          {error && <ErrorMessage>{error}</ErrorMessage>}

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
