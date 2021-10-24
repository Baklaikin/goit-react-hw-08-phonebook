import PhoneForm from "components/PhoneForm/PhoneForm";
import FilterContacts from "components/FilterContacts/FilterContacts";
import ContactList from "components/ContactList/ContactList";
import MainContainer from "components/MainContainer/MainContainer";
import Header from "components/Header/Header";
import Homepage from "components/Homeview/Homeview";
import Nav from "components/Navigation/Navigation";
import { Route, Switch } from "react-router";
import { lazy, Suspense } from "react";
import { LogIn } from "components/LogIn/login";
import Register from "components/Register/Register";
import "./App.css";
import UserMenu from "components/UserMenu/UserMenu";
import { AppBar } from "components/AppBar/AppBar";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import authOperations from "redux/auth/auth-operations";
import { fetchAllContacts } from "redux/phoneBook/phoneBook-operations";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
    dispatch(fetchAllContacts());
  }, [dispatch]);
  return (
    <>
      <MainContainer>
        <Nav />
        <Suspense fallback={<h1>Wait a sec...</h1>} />

        <Switch>
          <Route path="/" exact>
            <Homepage />
          </Route>
          <Route path="/LogIn">
            <LogIn />
          </Route>
          <Route path="/Register">
            <Register />
          </Route>
          <Route path="/Contacts">
            <PhoneForm />
            <h2>Contacts:</h2>
            <FilterContacts />
            <ContactList />
          </Route>
        </Switch>
      </MainContainer>
    </>
  );
}

export default App;
