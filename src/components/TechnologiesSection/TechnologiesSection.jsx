// Libs
import { ImStack } from 'react-icons/im';
// Data
import data from 'data/technologies.json';
import {
  TechList,
  TechnoligiesWrap,
  Title,
} from './TechnologiesSection.styled';
import { TechnologiesItem } from 'components/TechnologiesItem/TechnologiesItem';

export const TechnologiesSection = () => {
  return (
    <TechnoligiesWrap>
      <Title>
        <ImStack size={24} />
        Technologies Used
      </Title>
      <TechList>
        {data.technologies.map(({ id, title, link, logo }) => (
          <TechnologiesItem key={id} title={title} link={link} logo={logo} />
        ))}
      </TechList>
    </TechnoligiesWrap>
  );
};
