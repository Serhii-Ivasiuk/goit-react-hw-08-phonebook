// Libs
import { ImBook, ImStack } from 'react-icons/im';
// Data
import data from 'data/technologies.json';
// Styled components
import {
  Hero,
  HomePageWrap,
  MainTitle,
  StartLink,
  TechList,
  Title,
  TechnoligiesWrap,
  TechLink,
  DescriptionWrap,
  Text,
} from './HomePage.styled';

export const HomePage = () => {
  return (
    <HomePageWrap>
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

      <TechnoligiesWrap>
        <Title>
          <ImStack size={24} />
          Technologies Used
        </Title>
        <TechList>
          {data.technologies.map(({ id, title, link, logo }) => (
            <li key={id}>
              <TechLink href={link} target="_blank" rel="noopener noreferrer">
                <img src={logo} alt={title} height="32" />
                {title}
              </TechLink>
            </li>
          ))}
        </TechList>
      </TechnoligiesWrap>
    </HomePageWrap>
  );
};
