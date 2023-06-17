// React components
import { AppBar } from 'components/AppBar/AppBar';
import { Outlet } from 'react-router-dom';
// Styled components
import { Container, LayoutWrap } from './Layout.styled';

export const Layout = () => {
  return (
    <LayoutWrap>
      <header>
        <Container>
          <AppBar />
        </Container>
      </header>
      <main>
        <Container>
          <Outlet />
        </Container>
      </main>
    </LayoutWrap>
  );
};
