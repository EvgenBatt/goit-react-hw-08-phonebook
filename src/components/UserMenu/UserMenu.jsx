import { useAuth } from 'hooks/useAuth';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/operations';
import { Button, Text, Wrap } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <Wrap>
      <Text>Welcome, {user.name}</Text>
      <Button type="button" onClick={() => dispatch(logOut())}>
        Logout
      </Button>
    </Wrap>
  );
};
