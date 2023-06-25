// Libs
import { ImBook } from 'react-icons/im';
// Styled components
import {
  Hero,
  MainTitle,
  DescriptionWrap,
  StartLink,
  Text,
} from './HeroSection.styled';

export const HeroSection = () => {
  return (
    <Hero>
      <MainTitle>
        <ImBook size={32} />
        Phonebook App
      </MainTitle>

      <DescriptionWrap>
        <Text>
          Welcome to the Phonebook! Stay organized and manage your contacts
          effortlessly.
        </Text>
        <Text>
          The Phonbook App is built using cutting-edge technologies and
          libraries. It has a user-friendly, intuitive interface that makes it
          easy to manage contacts in your digital address book.
        </Text>
        <StartLink to="/register">Get Started</StartLink>
      </DescriptionWrap>
    </Hero>
  );
};
