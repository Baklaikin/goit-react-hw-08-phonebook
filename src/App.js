import PhoneForm from "components/PhoneForm/PhoneForm";
import FilterContacts from "components/FilterContacts/FilterContacts";
import ContactList from "components/ContactList/ContactList";
import MainContainer from "components/MainContainer/MainContainer";
import Header from "components/Header/Header";
import Homepage from "components/Homeview/Homeview";
// import { LogIn } from "components/LogIn/login";
import Nav from "components/Navigation/Navigation";
import { Route, Switch } from "react-router";
import { lazy, Suspense } from "react";
import { LogIn } from "components/LogIn/login";
import "./App.css";

function App() {
  return (
    <>
      <MainContainer>
        <Header>
          <Nav />
        </Header>
        <Suspense fallback={<h1>Wait a sec...</h1>} />
        <Switch>
          <Route path="/" exact>
            <Homepage />
          </Route>
          <Route path="/LogIn">
            <LogIn />
          </Route>
          <Route path="/Register">
            <LogIn />
          </Route>
          <Route path="/Contacts">
            <PhoneForm />
            <h2>Contacts:</h2>
            <FilterContacts />
            <ContactList />
          </Route>
          {/* <Route path="/Register">
        <LogIn/>
          </Route> */}
          {/* <h2>Contacts:</h2>
        <FilterContacts />
        <ContactList /> */}
        </Switch>
      </MainContainer>
    </>
  );
}

export default App;
