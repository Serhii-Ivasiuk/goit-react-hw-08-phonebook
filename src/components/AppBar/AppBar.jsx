// Libs
import { useSelector } from 'react-redux';
// Redux selectors
import { selectIsLoggedIn, selectIsRefreshing } from 'redux/auth/authSelectors';
// React components
import { Navigation } from 'components/Navigation/Navigation';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { UserMenu } from 'components/UserMenu/UserMenu';
// Styled components
import { AppBarWrap } from './AppBar.styled';

export const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);

  return (
    <AppBarWrap>
      <Navigation />
      {isLoggedIn && <UserMenu />}
      {!isLoggedIn && !isRefreshing && <AuthNav />}
    </AppBarWrap>
  );
};
