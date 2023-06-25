// Libs
import styled from '@emotion/styled';

export const LayoutWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding-top: 50px;
`;

export const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  width: 100%;
  background-color: #f8f8ff;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  min-width: 320px;
  margin: 0 auto;
  padding: 0 20px;

  @media screen and (min-width: 768px) {
    max-width: 768px;
  }

  @media screen and (min-width: 1240px) {
    max-width: 1240px;
  }
`;

export const Main = styled.main`
  padding: 16px 0;
`;
