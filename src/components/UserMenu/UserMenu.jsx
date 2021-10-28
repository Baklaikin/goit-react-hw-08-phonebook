import { useDispatch, useSelector } from "react-redux";
import { Button } from "@mui/material";
import { Wrapper, Title } from "components/UserMenu/UserMenu.styled";
import authOperations from "redux/auth/auth-operations";
import authSelectors from "redux/auth/auth-selectors";

export default function UserMenu() {
  const dispatch = useDispatch();
  const email = useSelector(authSelectors.getUserEmail);

  return (
    <Wrapper>
      <Title>{email}</Title>
      <Button
        variant="outlined"
        color="error"
        size="small"
        type="submit"
        onClick={() => dispatch(authOperations.logOut())}
      >
        Выйти
      </Button>
    </Wrapper>
  );
}
