// Libs
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
// React components
import { AppBar } from 'components/AppBar/AppBar';
import { PageLoader } from 'components/Loaders/Loaders';
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
          <Suspense fallback={<PageLoader />}>
            <Outlet />
          </Suspense>
        </Container>
      </main>
    </LayoutWrap>
  );
};
