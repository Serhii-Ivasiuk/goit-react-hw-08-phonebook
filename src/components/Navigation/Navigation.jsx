// Libs
import { useSelector } from 'react-redux';
import { ImHome, ImProfile } from 'react-icons/im';
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
          <StyledNavLink to="/">
            <ImHome />
            Home
          </StyledNavLink>
        </li>
        {isLoggedIn && (
          <li>
            <StyledNavLink to="/contacts">
              <ImProfile />
              Contacts
            </StyledNavLink>
          </li>
        )}
      </NavigationList>
    </nav>
  );
};
