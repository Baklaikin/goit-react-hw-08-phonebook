import {
  NavigationLink,
  Navigation,
  Header,
  Span,
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
          <Span> Home</Span>
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
