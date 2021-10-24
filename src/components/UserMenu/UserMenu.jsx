import { useDispatch, useSelector } from "react-redux";
import authOperations from "redux/auth/auth-operations";
import authSelectors from "redux/auth/auth-selectors";
import styled from "@emotion/styled";

const Wrapper = styled.div`
  display: flex;
`;
const Title = styled.h4`
  color: darkgrey;
  font-size: 20px;
  text-decoration: none;
  margin-right: 5px;
  &.active {
    color: darkgreen;
  }
`;

export default function UserMenu() {
  const dispatch = useDispatch();
  const email = useSelector(authSelectors.getUserEmail);

  return (
    <Wrapper>
      <Title>{email}</Title>
      <button type="submit" onClick={() => dispatch(authOperations.logOut())}>
        Выйти
      </button>
    </Wrapper>
  );
}
