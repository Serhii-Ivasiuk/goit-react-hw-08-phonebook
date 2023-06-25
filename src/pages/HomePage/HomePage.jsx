// Styled components
import { HomePageWrap } from './HomePage.styled';
import { HeroSection } from 'components/HeroSection/HeroSection';
import { TechnologiesSection } from 'components/TechnologiesSection/TechnologiesSection';

export const HomePage = () => {
  return (
    <HomePageWrap>
      <HeroSection />
      <TechnologiesSection />
    </HomePageWrap>
  );
};
