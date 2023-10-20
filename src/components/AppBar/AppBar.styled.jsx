import styled from '@emotion/styled';
import AutoStoriesOutlinedIcon from '@mui/icons-material/AutoStoriesOutlined';

export const Header = styled.header`
  display: flex;
  align-items: center;
  padding-top: 15px;
  padding-bottom: 15px;
  background-color: ${({ theme }) => theme.palette.secondary.main};
  box-shadow: 0px 1px 1px 1px ${({ theme }) => theme.palette.secondary.main};
`;

export const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled(AutoStoriesOutlinedIcon)`
  font-size: 28px;
  color: #e7e7e7;
`;
