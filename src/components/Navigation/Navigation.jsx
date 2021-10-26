import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";
import UserMenu from "components/UserMenu/UserMenu";
import { Authnav } from "components/AuthNav/Authnav";
import { useSelector } from "react-redux";
import authSelectors from "redux/auth/auth-selectors";

//Styles
const NavigationLink = styled(NavLink)`
  margin: 0;
  color: darkgrey;
  font-size: 14px;
  text-decoration: none;
  margin-right: 10px;

  &.active {
    color: darkgreen;
  }

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }

  @media screen and(min-width:1024px) {
    font-size: 20px;
  }
`;

const Navigation = styled.nav`
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: baseline;
`;

const Header = styled.header`
  height: auto;
  width: 320px;
  padding-bottom: 10px;
  border-bottom: 2px solid #e0e0de;

  @media screen and (min-width: 768px) {
    width: 450px;
  }
  @media screen and (min-width: 1024px) {
    width: 600px;
  }
`;

//Function
export default function Nav() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <Header>
      <Navigation>
        <NavigationLink exact to="/">
          HOME
        </NavigationLink>
        {isLoggedIn ? (
          <NavigationLink to="/contacts">Контакты</NavigationLink>
        ) : (
          <NavigationLink to="/login" />
        )}
        {isLoggedIn ? <UserMenu /> : <Authnav />}
      </Navigation>
    </Header>
  );
}
