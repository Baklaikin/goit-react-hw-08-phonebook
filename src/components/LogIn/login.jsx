import styled from "@emotion/styled";
import { useState } from "react";
import { useDispatch } from "react-redux";
import authOperations from "redux/auth/auth-operations";

const Form = styled.form`
  margin-left: auto;
  margin-right: auto;
`;

const Button = styled.button`
  margin-left: 10px;
`;

export const LogIn = () => {
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
      <label>
        Email
        <input
          type="text"
          autoComplete="off"
          name="email"
          value={email}
          onChange={inputHandler}
        />
      </label>
      <label>
        Password
        <input
          type="text"
          autoComplete="off"
          name="password"
          value={password}
          onChange={inputHandler}
        />
      </label>
      <Button type="submit">Войти</Button>
    </Form>
  );
};
