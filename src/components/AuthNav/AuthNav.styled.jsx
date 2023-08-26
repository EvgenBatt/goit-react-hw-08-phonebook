import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Wrap = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const NavLinkStyled = styled(NavLink)`
  font-size: 18px;
  font-weight: 500;
  color: #e7e7e7;
  transition-property: color, background-color, transform;
  transition-duration: 0.2s;
  transition-timing-function: 0.25s cubic-bezier(0.7, 0.98, 0.86, 0.98);
  transform: scale(0.9);

  &:hover,
  &:focus {
    color: #ff3842;
    background-color: transparent;
  }

  &.active {
    color: #ff3842;
    background-color: #ffffffe3;

    padding: 6px 12px;
    border-radius: 4px;

    transform: scale(1);
    pointer-events: none;
  }
`;
