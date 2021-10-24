import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";
import UserMenu from "components/UserMenu/UserMenu";
import { Authnav } from "components/AuthNav/Authnav";
import { useSelector } from "react-redux";
import authSelectors from "redux/auth/auth-selectors";

const NavigationLink = styled(NavLink)`
  color: darkgrey;
  font-size: 20px;
  text-decoration: none;
  margin-right: 5px;
  &.active {
    color: darkgreen;
  }
`;

const Navigation = styled.nav`
  padding: 12px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Header = styled.header`
  height: 100px;
`;

export default function Nav() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <Header>
      <Navigation>
        <NavigationLink exact to="/">
          HOME
        </NavigationLink>
        <NavigationLink to="/Contacts">Контакты</NavigationLink>
        {isLoggedIn ? <UserMenu /> : <Authnav />}
      </Navigation>
    </Header>
  );
}
