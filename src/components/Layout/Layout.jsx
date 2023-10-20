import { Suspense } from 'react';
import { AppBar, Loader } from 'components';
import { Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <>
      <AppBar />

      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};
