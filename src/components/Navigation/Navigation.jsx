import {
  NavigationLink,
  Navigation,
  Header,
} from "components/Navigation/Navigation.styled";
import { Authnav } from "components/AuthNav/Authnav";
import { useSelector } from "react-redux";
import UserMenu from "components/UserMenu/UserMenu";
import authSelectors from "redux/auth/auth-selectors";

export default function Nav() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <Header>
      <Navigation>
        <NavigationLink exact to="/">
          <span> Главная</span>
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
