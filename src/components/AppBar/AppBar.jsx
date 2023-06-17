// React components
import { Navigation } from 'components/Navigation/Navigation';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { UserMenu } from 'components/UserMenu/UserMenu';
// Styled components
import { AppBarWrap } from './AppBar.styled';

export const AppBar = () => {
  return (
    <AppBarWrap>
      <Navigation />
      <AuthNav />
      <UserMenu />
    </AppBarWrap>
  );
};
