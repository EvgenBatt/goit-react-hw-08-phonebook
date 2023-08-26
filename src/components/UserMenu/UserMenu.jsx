import { useAuth } from "hooks/useAuth";
import { useDispatch } from "react-redux";
import { logOut} from "redux/operations";

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <>
      <p>Welcome, {user.name}</p>
      <button type="button" onClick={() => dispatch(logOut())}>
        Logout
      </button>
    </>
  );
};