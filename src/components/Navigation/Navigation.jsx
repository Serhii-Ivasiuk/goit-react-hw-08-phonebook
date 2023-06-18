// Libs
import { useSelector } from 'react-redux';
// Redux selectors
import { getIsLoggedIn } from 'redux/auth/authSelectors';
// Styled components
import { NavigationList, StyledNavLink } from './Navigation.styled';

export const Navigation = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);

  return (
    <nav>
      <NavigationList>
        <li>
          <StyledNavLink to="/">Home</StyledNavLink>
        </li>
        {isLoggedIn && (
          <li>
            <StyledNavLink to="/contacts">Contacts</StyledNavLink>
          </li>
        )}
      </NavigationList>
    </nav>
  );
};
