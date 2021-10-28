import { Form, Input } from "components/LogIn/Login.styled";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Button } from "@mui/material";
import authOperations from "redux/auth/auth-operations";

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
