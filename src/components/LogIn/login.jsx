import styled from "@emotion/styled";
import { useState } from "react";
import { useDispatch } from "react-redux";
import authOperations from "redux/auth/auth-operations";

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

const Button = styled.button``;

const Label = styled.label`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const Input = styled.input`
  border-radius: 4px;
  @media screen and (min-width: 768px) {
    width: 250px;
  }
`;

const Span = styled.span``;

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
      <Label>
        <Span>Email</Span>
        <Input
          type="text"
          autoComplete="off"
          name="email"
          value={email}
          onChange={inputHandler}
        />
      </Label>
      <Label>
        <Span>Password</Span>
        <Input
          type="text"
          autoComplete="off"
          name="password"
          value={password}
          onChange={inputHandler}
        />
      </Label>
      <Button type="submit">Войти</Button>
    </Form>
  );
}
