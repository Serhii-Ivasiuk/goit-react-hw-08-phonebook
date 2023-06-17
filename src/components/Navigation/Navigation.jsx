// Styled components
import { NavigationList, StyledNavLink } from './Navigation.styled';

export const Navigation = () => {
  return (
    <nav>
      <NavigationList>
        <li>
          <StyledNavLink to="/">Contacts</StyledNavLink>
        </li>
      </NavigationList>
    </nav>
  );
};
