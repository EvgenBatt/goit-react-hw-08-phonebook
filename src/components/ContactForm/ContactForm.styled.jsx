import styled from '@emotion/styled';
import { TextField } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import { AccountCircle } from '@mui/icons-material';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 300px;
`;

export const Label = styled.label`
  display: flex;
  align-items: flex-end;
  font-family: 'Roboto', sans-serif;
  font-size: 20px;
  line-height: 1.5;
`;

export const Input = styled(TextField)`
  width: 100%;
`;

export const Button = styled.button`
  width: 150px;
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  line-height: 1.5;
  border-radius: 5px;
  border: none;
  margin-top: 15px;
  color: #fff;
  background-color: ${({ theme }) => theme.palette.primary.main};
  margin-left: 32px;
  padding: 5px 10px;
  transition: background-color 250ms cubic-bezier(0.7, 0.98, 0.86, 0.98);

  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.palette.secondary.main};
  }
`;

export const NumberIcon = styled(PhoneIcon)`
  fill: ${({ theme }) => theme.palette.primary.main};
`;

export const NameIcon = styled(AccountCircle)`
  fill: ${({ theme }) => theme.palette.primary.main};
`;
