import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const TextWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 25px;
`;

export const Title = styled.h1`
  margin-top: 30px;
  font-size: 40px;
`;

export const Text = styled.p`
  font-size: 18px;
`;

export const LinkStyled = styled(Link)`
  color: blue;
`;
