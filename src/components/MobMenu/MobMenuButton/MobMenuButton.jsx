import { Divide as Hamburger } from 'hamburger-react';

export const MobMenuButton = ({ open, toggle }) => {
  return <Hamburger color="#e7e7e7" size={25} toggled={open} toggle={toggle} />;
};
