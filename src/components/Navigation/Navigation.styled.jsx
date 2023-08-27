import styled from '@emotion/styled';
import AutoStoriesOutlinedIcon from '@mui/icons-material/AutoStoriesOutlined';
import { NavLink } from 'react-router-dom';

export const NavLinkHome = styled(NavLink)`
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

    padding: 2px 12px;
    border-radius: 4px;

    transform: scale(0.9);
    pointer-events: none;
  }
`;

export const Wrap = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const Logo = styled(AutoStoriesOutlinedIcon)`
  font-size: 28px;
  color: #e7e7e7;
`;

export const Title = styled.span`
  font-size: 24px;
  font-weight: 600;
  color: currentColor;
`;

export const NavLinkStyled = styled(NavLink)`
  font-size: 24px;
  font-weight: 600;
  color: #e7e7e7;
  margin-right: auto;
  margin-left: 20px;
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

    padding: 2px 12px;
    border-radius: 4px;

    transform: scale(0.9);
    pointer-events: none;
  }
`;
