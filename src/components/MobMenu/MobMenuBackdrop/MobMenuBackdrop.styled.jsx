import styled from '@emotion/styled';

export const Backdrop = styled.div`
  position: absolute;
  top: 78px;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(115, 115, 115, 0.5);
  opacity: ${({ open }) => (open ? 1 : 0)};
  pointer-events: ${({ open }) => (open ? 'auto' : 'none')};
  transition: opacity 300ms ease-in-out;
  z-index: 1;
`;
