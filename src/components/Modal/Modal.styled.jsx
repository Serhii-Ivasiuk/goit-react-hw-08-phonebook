// Libs
import styled from '@emotion/styled';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 50px;
  background-color: #f8f8ff;
  z-index: 1;
`;

export const ModalWindow = styled.div`
  position: relative;
  width: calc(100% - 40px);
  min-width: 280px;

  max-width: calc(100vw - 48px);
  max-height: calc(100vh - 24px);

  @media screen and (min-width: 768px) {
    max-width: calc(768px - 40px);
    margin: 0 auto;
  }
`;

export const CloseBtn = styled.span`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 16px;
  height: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: color 250ms linear, transform 250ms linear;

  &:hover,
  &:focus {
    color: #ff9a9a;
  }
`;
