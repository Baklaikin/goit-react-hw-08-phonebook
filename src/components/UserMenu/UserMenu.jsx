import { useDispatch, useSelector } from "react-redux";
import authOperations from "redux/auth/auth-operations";
import authSelectors from "redux/auth/auth-selectors";
import styled from "@emotion/styled";

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row-reverse;
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;
const Title = styled.h4`
  color: darkgrey;
  font-size: 14px;
  text-decoration: none;
  align-items: center;
  margin-right: 5px;
  margin-top: 0;
  margin-bottom: 0;
  &.active {
    color: darkgreen;
  }
  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`;

const Button = styled.button``;

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
