import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { currentUser } from 'redux/operations';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { PrivateRoute, PublicRoute } from 'routes';
import { Login, Register } from 'pages';
import ContactsPage from 'pages/Contacts/Contacts';
import Home from 'pages/Home/Home';
import ErrorPage from './Error/Error';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(currentUser());
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route
          path="/register"
          element={<PublicRoute redirectTo="/login" component={<Register />} />}
        />
        <Route
          path="/login"
          element={<PublicRoute redirectTo="/contacts" component={<Login />} />}
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
          }
        />
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  );
};
