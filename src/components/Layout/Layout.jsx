// Libs
import { Suspense } from 'react';
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
          <Suspense fallback={<h1>Suspense loading...</h1>}>
            <Outlet />
          </Suspense>
        </Container>
      </main>
    </LayoutWrap>
  );
};
