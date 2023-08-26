import { Container } from '@mui/material';
import { HeaderWrap } from './Layout.styled';
import { Suspense } from 'react';
import { AppBar, Loader } from 'components';
import { Outlet } from 'react-router-dom';

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
