import { AuthNav, Navigation, UserMenu } from 'components';
import { useAuth } from 'hooks/useAuth';
import { Header, Nav } from './AppBar.styled';
import { Container } from 'styles';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Header>
      <Container>
        <Nav>
          <Navigation />
          <div>{isLoggedIn ? <UserMenu /> : <AuthNav />}</div>
        </Nav>
      </Container>
    </Header>
  );
};
