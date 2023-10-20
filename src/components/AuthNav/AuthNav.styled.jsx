import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Ul = styled.ul`
  display: flex;
  align-items: center;
  gap: 20px;

  @media screen and (max-width: 767px) {
    flex-flow: column nowrap;
    background-color: #303c88;
    position: fixed;
    transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
    top: 78px;
    right: 0;
    width: 100%;
    padding-top: 40px;
    padding-bottom: 40px;
    transition: transform 300ms ease-in-out;
    z-index: 2;
    border-top: 1px solid #26306e;
  }
`;

export const Li = styled.li``;

export const NavLinkStyled = styled(NavLink)`
  font-size: 19px;
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

    padding: 5px 12px;
    border-radius: 4px;

    transform: scale(0.9);
    pointer-events: none;
  }
`;
