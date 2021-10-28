import { NavigationLink } from "./Authnav.styled";

export const Authnav = () => {
  return (
    <div>
      <NavigationLink to="/login">Логин</NavigationLink>
      <NavigationLink to="/register">Регистрация</NavigationLink>
    </div>
  );
};
