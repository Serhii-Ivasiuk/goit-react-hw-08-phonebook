// Libs
import { useSelector } from 'react-redux';
// Redux selectors
import { getIsLoggedIn } from 'redux/auth/authSelectors';
// React components
import { Navigation } from 'components/Navigation/Navigation';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { UserMenu } from 'components/UserMenu/UserMenu';
// Styled components
import { AppBarWrap } from './AppBar.styled';

export const AppBar = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);

  return (
    <AppBarWrap>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </AppBarWrap>
  );
};
