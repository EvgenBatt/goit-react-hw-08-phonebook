import styled from '@emotion/styled';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

export const Ul = styled.ul`
  width: 500px;
  display: flex;
  align-items: stretch;
  flex-direction: column;
  gap: 5px;
  max-height: 50vh;
  overflow-y: auto;
`;

export const Li = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;

  &:nth-of-type(odd) {
    background-color: rgb(231 231 231 / 50%);
  }
`;

export const Name = styled.h3`
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  line-height: 1.5;
`;

export const Phone = styled.p`
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  line-height: 1.5;
`;

export const Button = styled.button`
  margin-right: 12px;
  background-color: transparent;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #047c00ad;
  transition: color 250ms cubic-bezier(0.7, 0.98, 0.86, 0.98);

  &:hover,
  &:focus {
    color: #bd0000c2;
  }
`;

export const DeleteIcon = styled(HighlightOffIcon)`
  fill: currentColor;
`;
