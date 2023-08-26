import { AuthNav, Navigation, UserMenu } from 'components';
import { useAuth } from 'hooks/useAuth';
import { Flex } from './AppBar.styled';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Flex>
      <Navigation />
      <div>{isLoggedIn ? <UserMenu /> : <AuthNav />}</div>
    </Flex>
  );
};
