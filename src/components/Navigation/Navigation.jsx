import { useAuth } from 'hooks/useAuth';
import {
  Logo,
  NavLinkHome,
  NavLinkStyled,
  Title,
  Wrap,
} from './Navigation.styled';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <>
      <Wrap>
        <Logo />
        <NavLinkHome to="/">
          <Title>Phonebook</Title>
        </NavLinkHome>
      </Wrap>
      {isLoggedIn && <NavLinkStyled to="/contacts">Contacts</NavLinkStyled>}
    </>
  );
};
