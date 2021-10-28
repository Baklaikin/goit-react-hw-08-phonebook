import { Form, StyledInput } from "components/LogIn/Login.styled";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Button } from "@mui/material";
import authOperations from "redux/auth/auth-operations";

export default function LogIn() {
  const dispatch = useDispatch();
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const submitHandler = (event) => {
    event.preventDefault();
    const { email, password } = credentials;
    dispatch(authOperations.logIn({ email, password }));
    setCredentials({
      email: "",
      password: "",
    });
  };

  const inputHandler = ({ target: { name, value } }) => {
    setCredentials((prev) => ({ ...prev, [name]: value }));
  };
  return (
    <Form action="auth" onSubmit={submitHandler}>
      <StyledInput
        id="outlined-basic"
        required
        label="Email"
        variant="outlined"
        color="primary"
        type="text"
        autoComplete="off"
        name="email"
        value={credentials.email}
        onChange={inputHandler}
      />

      <StyledInput
        id="outlined-basics"
        required
        label="Password"
        variant="outlined"
        color="primary"
        type="password"
        autoComplete="off"
        name="password"
        value={credentials.password}
        onChange={inputHandler}
      />
      <Button variant="outlined" color="primary" size="medium" type="submit">
        Войти
      </Button>
    </Form>
  );
}
