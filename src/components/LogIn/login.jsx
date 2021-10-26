import styled from "@emotion/styled";
import { useState } from "react";
import { useDispatch } from "react-redux";
import authOperations from "redux/auth/auth-operations";
import { Button, TextField } from "@mui/material";

const Form = styled.form`
  width: 280px;
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;

  @media screen and (min-width: 768px) {
    min-width: 400px;
  }
`;

const Input = styled(TextField)`
  margin-bottom: 10px;
`;

export default function LogIn() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();
    dispatch(authOperations.logIn({ email, password }));
    setEmail("");
    setPassword("");
  };

  const inputHandler = ({ target: { name, value } }) => {
    switch (name) {
      case "email":
        return setEmail(value);
      case "password":
        return setPassword(value);
      default:
        return;
    }
  };
  return (
    <Form action="auth" onSubmit={submitHandler}>
      <Input
        id="outlined-basic"
        label="Email"
        variant="outlined"
        color="error"
        type="text"
        autoComplete="off"
        name="email"
        value={email}
        onChange={inputHandler}
      />

      <Input
        id="outlined-basic"
        label="Password"
        variant="outlined"
        color="error"
        type="text"
        autoComplete="off"
        name="password"
        value={password}
        onChange={inputHandler}
      />
      <Button variant="outlined" color="error" size="medium" type="submit">
        Войти
      </Button>
    </Form>
  );
}
