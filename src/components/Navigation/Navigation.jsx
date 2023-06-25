// Libs
import { useSelector } from 'react-redux';
import { ImHome, ImProfile } from 'react-icons/im';
// Redux selectors
import { getIsLoggedIn } from 'redux/auth/authSelectors';
// Styled components
import { NavigationList, StyledNavLink, Text } from './Navigation.styled';

export const Navigation = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);

  return (
    <nav>
      <NavigationList>
        <li>
          <StyledNavLink to="/">
            <ImHome />
            <Text>Home</Text>
          </StyledNavLink>
        </li>
        {isLoggedIn && (
          <li>
            <StyledNavLink to="/contacts">
              <ImProfile />
              <Text>Contacts</Text>
            </StyledNavLink>
          </li>
        )}
      </NavigationList>
    </nav>
  );
};
