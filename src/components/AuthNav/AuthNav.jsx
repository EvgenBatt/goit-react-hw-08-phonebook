import { useEffect, useRef, useState } from 'react';
import { Li, NavLinkStyled, Ul } from './AuthNav.styled';
import { MobMenuButton, MobMenuBackdrop } from 'components/MobMenu';

export const AuthNav = () => {
  const [open, setOpen] = useState(false);
  const isMobile = useRef(window.innerWidth < 768);

  const handleResize = () => {
    isMobile.current = window.innerWidth < 768;
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      {isMobile.current && <MobMenuButton open={open} toggle={setOpen} />}
      <MobMenuBackdrop open={open} />
      <Ul open={open}>
        <Li>
          <NavLinkStyled to="/register">Register</NavLinkStyled>
        </Li>
        <Li>
          <NavLinkStyled to="/login">Login</NavLinkStyled>
        </Li>
      </Ul>
    </>
  );
};
