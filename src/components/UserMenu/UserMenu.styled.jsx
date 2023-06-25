// Libs
import styled from '@emotion/styled';

export const UserMenuWrap = styled.div`
  height: 32px;
  display: flex;
  border: 1px solid #505050;
  border-radius: 8px;
  overflow: hidden;
`;
export const User = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  min-width: 50px;
  padding: 0 16px;
  font-weight: 700;

  @media screen and (max-width: 480px) {
    min-width: 50px;
  }
`;

export const UserName = styled.span`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 150px;

  @media screen and (max-width: 480px) {
    display: none;
  }
`;

export const LogOutBtn = styled.button`
  padding: 0 16px;
  height: 100%;
  min-width: 110px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  font-weight: 700;
  color: #ffffff;
  border: none;
  background-color: #2f4f4f;
  text-shadow: 1px 1px 2px #505050;
  transition: background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;

  &:hover,
  &:focus {
    background-color: #457575;
  }

  &:disabled {
    cursor: initial;
    background-color: #505050;
  }

  @media screen and (max-width: 480px) {
    min-width: 50px;
  }
`;

export const LogOutText = styled.span`
  @media screen and (max-width: 480px) {
    display: none;
  }
`;
