import UserMenu from "components/UserMenu/UserMenu";
import { LogIn } from "components/LogIn/login";
import Register from "components/Register/Register";

export const AppBar = () => {
  return (
    <header>
      <Register />
      <LogIn />
      <UserMenu />
    </header>
  );
};
