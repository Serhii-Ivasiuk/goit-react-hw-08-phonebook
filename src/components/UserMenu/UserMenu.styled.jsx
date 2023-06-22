// Libs
import styled from '@emotion/styled';

export const UserMenuWrap = styled.div`
  height: 32px;
  display: flex;
  align-items: center;
  gap: 16px;
  border: 1px solid #505050;
  padding: 0 0 0 16px;
  border-radius: 8px;
  overflow: hidden;
`;
export const UserName = styled.p`
  font-weight: 700;
`;

export const LogOutBtn = styled.button`
  padding: 0 16px 0;
  height: 100%;
  min-width: 90px;
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
`;
