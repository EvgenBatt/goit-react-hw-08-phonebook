import { HeaderWrap } from './Layout.styled';
import { Suspense } from 'react';
import { AppBar, Loader } from 'components';
import { Outlet } from 'react-router-dom';
import { Container } from 'styles';

export const Layout = () => {
  return (
    <>
      <HeaderWrap>
        <Container>
          <nav>
            <AppBar />
          </nav>
        </Container>
      </HeaderWrap>

      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};
