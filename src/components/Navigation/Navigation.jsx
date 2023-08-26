import { useAuth } from 'hooks/useAuth';
import { NavLink } from 'react-router-dom';
import { Logo, Title, Wrap } from './Navigation.styled';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <>
      <NavLink to="/">
        <Wrap>
          <Logo />
          <Title>Phonebook</Title>
        </Wrap>
      </NavLink>
      {isLoggedIn && <NavLink to="/contacts">Contacts</NavLink>}
    </>
  );
};
