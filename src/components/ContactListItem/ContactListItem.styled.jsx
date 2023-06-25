// Libs
import styled from '@emotion/styled';

export const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 34px;
  border: 1px solid #505050;
  border-radius: 16px;
  background-color: #ffffff;
  overflow: hidden;

  @media screen and (max-width: 480px) {
    height: 48px;
  }
`;

export const ContactWrap = styled.div`
  display: flex;
  gap: 12px;
  padding: 8px 16px;
  overflow: hidden;

  @media screen and (max-width: 480px) {
    flex-direction: column;
    gap: 6px;
  }
`;

export const Name = styled.p`
  font-weight: 500;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  @media screen and (max-width: 480px) {
    flex-direction: column;
    gap: 4px;
  }
`;

export const Number = styled.p`
  font-weight: 400;

  @media screen and (max-width: 480px) {
    font-size: 12px;
  }
`;

export const ActionsWrap = styled.div`
  display: flex;
  height: 100%;
  border-left: 1px solid black;
  background-color: #e1e1e1;
`;

const commonActionsStyles = `
  display: flex;
  justify-content: center;
  align-items: center;
  width: 36px;
  height: 100%;
  padding: 0;
  border: none;
  cursor: pointer;
  color: #505050;
  background-color: transparent;
  transition: color 250ms linear, transform 250ms linear;

  &:disabled:hover,
  &:disabled:focus {
   color: #505050;
  }
`;

export const CallLink = styled.a`
  ${commonActionsStyles}

  &:hover,
  &:focus {
    color: #008000;
  }
`;

export const EditBtn = styled.button`
  ${commonActionsStyles}

  &:hover,
  &:focus {
    color: #ffc800;
  }
`;

export const RemoveBtn = styled.button`
  ${commonActionsStyles}

  &:hover,
  &:focus {
    color: #ff9a9a;
  }
`;
