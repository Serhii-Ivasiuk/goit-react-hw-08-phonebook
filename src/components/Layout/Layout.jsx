// Libs
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
// React components
import { AppBar } from 'components/AppBar/AppBar';
import { PageLoader } from 'components/Loaders/Loaders';
// Styled components
import { Container, Header, LayoutWrap, Main } from './Layout.styled';

export const Layout = () => {
  return (
    <LayoutWrap>
      <Header>
        <Container>
          <AppBar />
        </Container>
      </Header>
      <Main>
        <Container>
          <Suspense fallback={<PageLoader />}>
            <Outlet />
          </Suspense>
        </Container>
      </Main>
    </LayoutWrap>
  );
};
