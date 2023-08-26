import styled from '@emotion/styled';

export const HeaderWrap = styled.header`
  display: flex;
  align-items: center;
  padding-top: 15px;
  padding-bottom: 15px;
  background-color: ${({ theme }) => theme.palette.secondary.main};
  box-shadow: 0px 1px 1px 1px ${({ theme }) => theme.palette.secondary.main};
`;

export const Title = styled.h1`
  font-family: 'Roboto', sans-serif;
  font-size: 32px;
  line-height: 1.5;
  margin: 0 auto;
  color: #dbdbdb;
`;
