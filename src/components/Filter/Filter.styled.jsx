import styled from '@emotion/styled';
import { TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

export const Label = styled.label`
  display: flex;
  align-items: flex-end;
  font-family: 'Roboto', sans-serif;
  font-size: 20px;
  line-height: 1.5;
  margin-bottom: 40px;
`;

export const Input = styled(TextField)`
  width: 60%;
`;

export const SearchIconStyled = styled(SearchIcon)`
  fill: ${({ theme }) => theme.palette.primary.main};
`;
