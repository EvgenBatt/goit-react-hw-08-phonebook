import { NavLinkStyled, Wrap } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <>
      <Wrap>
        <NavLinkStyled to="/register">Register</NavLinkStyled>
        <NavLinkStyled to="/login">Login</NavLinkStyled>
      </Wrap>
    </>
  );
};
