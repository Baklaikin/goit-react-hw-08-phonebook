import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

const NavigationLink = styled(NavLink)`
  color: darkgrey;
  font-size: 20px;
  text-decoration: none;
  &.active {
    color: darkgreen;
  }
  /* :not(:last-child) {
    margin-right: 10px;
  } */
`;
const Navigation = styled.nav`
  padding: 12px;
`;

export default function Nav() {
  return (
    <Navigation>
      <NavigationLink exact to="/">
        HOME
      </NavigationLink>
      <NavigationLink to="/Contacts">Контакты</NavigationLink>
      <div>
        <NavigationLink to="/LogIn">Логин</NavigationLink>
        <NavigationLink to="/Register">Регистрация</NavigationLink>
      </div>
    </Navigation>
  );
}
