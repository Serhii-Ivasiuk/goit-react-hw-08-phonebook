// Styled components
import { NavigationList, StyledNavLink } from './Navigation.styled';

export const Navigation = () => {
  return (
    <nav>
      <NavigationList>
        <li>
          <StyledNavLink to="/">Home</StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/contacts">Contacts</StyledNavLink>
        </li>
      </NavigationList>
    </nav>
  );
};
