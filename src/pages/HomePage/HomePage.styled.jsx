// Libs
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const HomePageWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`;

export const Hero = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 32px;
  height: 360px;
  width: 100%;
  padding: 20px;
  color: #ffffff;
  border-radius: 16px;
  background-color: #c4c4c4;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-image: linear-gradient(
      to right,
      rgba(93, 98, 68, 0.4),
      rgba(47, 48, 58, 0.4)
    ),
    url('https://img.freepik.com/free-vector/digital-futuristic-mobile-technology-concept-background_1017-25464.jpg');

  @media screen and (min-width: 480px) {
    height: 300px;
    align-items: center;
  }

  @media screen and (min-width: 768px) {
    flex-direction: row;
    align-items: start;
    height: 320px;
  }
`;

export const MainTitle = styled.h1`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 26px;

  @media screen and (min-width: 480px) {
    font-size: 32px;
  }

  @media screen and (min-width: 768px) {
    min-width: 280px;
    font-size: 32px;
  }
`;

export const DescriptionWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  max-width: 280px;
  height: 280px;

  @media screen and (max-width: 767.98px) {
    align-items: center;
    max-width: 100%;
  }

  @media screen and (min-width: 1240px) {
    align-items: center;
    max-width: 480px;
  }
`;

export const Text = styled.p`
  font-weight: 500;
  text-align: center;

  @media screen and (min-width: 768px) {
    text-align: start;
  }

  @media screen and (min-width: 1240px) {
    font-size: 22px;
  }
`;

export const StartLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  height: 42px;
  width: 100%;
  min-width: 160px;
  padding: 12px 8px;
  text-transform: uppercase;
  font-weight: 700;
  color: #ffffff;
  border: 1px solid #505050;
  background-color: #2f4f4f;
  border-radius: 16px;
  transition: background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 0.2s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    background-color: #457575;
    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
      0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
  }

  @media screen and (max-width: 767.98px) {
    width: 200px;
  }

  @media screen and (min-width: 1240px) {
    height: 46px;
    font-size: 20px;
  }
`;

export const TechnoligiesWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const Title = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;

export const TechList = styled.ul`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 16px;
  padding: 16px;
  border: 1px solid #505050;
  background-color: #ffffff;
  border-radius: 16px;
`;

export const TechLink = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100px;
  padding: 16px;
  font-size: 24px;
  font-weight: 500;
  border: 1px solid #dedede;
  border-radius: 12px;
  transition: box-shadow 0.2s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
      0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
  }
`;
