import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

const NavigationLink = styled(NavLink)`
  color: darkgrey;
  font-size: 20px;
  text-decoration: none;
  &.active {
    color: darkgreen;
  }
  &:not(:last-child) {
    margin-right: 10px;
  }
`;

export const Authnav = () => {
  return (
    <div>
      <NavigationLink to="/login">Логин</NavigationLink>
      <NavigationLink to="/register">Регистрация</NavigationLink>
    </div>
  );
};
