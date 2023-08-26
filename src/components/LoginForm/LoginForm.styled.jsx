import styled from '@emotion/styled';
import { TextField } from '@mui/material';
import { Form } from 'formik';

export const Flex = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h1`
  font-size: 30px;
  margin-top: 30px;
  margin-bottom: 40px;
`;

export const FormStyled = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 25px;
  width: 350px;
`;

export const Label = styled.label`
  display: flex;
  align-items: flex-end;
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
`;

export const Input = styled(TextField)`
  width: 100%;
`;

export const Button = styled.button`
  margin: 0 auto;
  width: 200px;
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  line-height: 1.5;
  border-radius: 5px;
  border: none;
  margin-top: 15px;
  color: #fff;
  background-color: ${({ theme }) => theme.palette.primary.main};
  padding: 5px 10px;
  transition: background-color 250ms cubic-bezier(0.7, 0.98, 0.86, 0.98);

  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.palette.secondary.main};
  }
`;
