import MainContainer from "components/MainContainer/MainContainer";
import Homepage from "components/Homeview/Homeview";
import Nav from "components/Navigation/Navigation";
import { Switch } from "react-router";
import { lazy, Suspense } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import authOperations from "redux/auth/auth-operations";
// import { fetchAllContacts } from "redux/phoneBook/phoneBook-operations";
import PrivatRoute from "components/Navigation/PrivateRoute";
import PublicRoute from "components/Navigation/PublicRoute";
import authSelectors from "redux/auth/auth-selectors";

import "./App.css";

const LogIn = lazy(() => import("components/LogIn/login"));
const Register = lazy(() => import("components/Register/Register"));
const PhoneForm = lazy(() => import("components/PhoneForm/PhoneForm"));
const FilterContacts = lazy(() =>
  import("components/FilterContacts/FilterContacts")
);
const ContactList = lazy(() => import("components/ContactList/ContactList"));

function App() {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(authSelectors.getFetchingStatus);
  console.log(isFetchingCurrentUser);
  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
    // dispatch(fetchAllContacts());
  }, [dispatch]);
  return (
    !isFetchingCurrentUser && (
      <MainContainer>
        <Nav />
        <Suspense fallback={<h1>Wait a sec...</h1>}>
          <Switch>
            <PublicRoute exact path="/">
              <Homepage />
            </PublicRoute>

            <PublicRoute exact path="/login" restricted>
              <LogIn />
            </PublicRoute>

            <PublicRoute exact path="/register" restricted>
              <Register />
            </PublicRoute>

            <PrivatRoute path="/Contacts" redirectTo="/login">
              <PhoneForm />
              <h2>Contacts:</h2>
              <FilterContacts />
              <ContactList />
            </PrivatRoute>
          </Switch>
        </Suspense>
      </MainContainer>
    )
  );
}

export default App;
