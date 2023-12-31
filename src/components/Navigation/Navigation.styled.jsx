// Libs
import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const NavigationList = styled.ul`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const StyledNavLink = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 8px;
  height: 42px;
  padding: 12px 8px;
  text-transform: uppercase;
  font-weight: 700;
  transition: color 0.2s cubic-bezier(0.4, 0, 0.2, 1);

  &.active {
    color: #ffc800;
  }

  &:hover,
  &:focus {
    color: #ffc800;
  }
`;

export const Text = styled.span`
  @media screen and (max-width: 620px) {
    display: none;
  }
`;
