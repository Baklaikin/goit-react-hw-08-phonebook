import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

const NavigationLink = styled(NavLink)`
  color: darkgrey;
  font-size: 20px;
  text-decoration: none;
  margin-right: 5px;
  &.active {
    color: darkgreen;
  }
`;

export const Authnav = () => {
  return (
    <div>
      <NavigationLink to="/LogIn">Логин</NavigationLink>
      <NavigationLink to="/Register">Регистрация</NavigationLink>
    </div>
  );
};
