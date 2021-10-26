import { useState } from "react";
import { useDispatch } from "react-redux";
import authOperations from "redux/auth/auth-operations";
import styled from "@emotion/styled";
import { Button, TextField } from "@mui/material";

const Form = styled.form`
  width: 280px;
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;

  @media screen and (min-width: 768px) {
    min-width: 330px;
  }
`;

const Input = styled(TextField)`
  margin-bottom: 10px;
`;

function Register() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case "name":
        return setName(value);
      case "email":
        return setEmail(value);
      case "password":
        return setPassword(value);
      default:
        return;
    }
  };

  const clickHandler = (event) => {
    event.preventDefault();
    dispatch(authOperations.register({ name, email, password }));
    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <div>
      <Form action="" onSubmit={clickHandler}>
        <Input
          id="outlined-basic"
          label="Name"
          variant="outlined"
          color="error"
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
        />
        <Input
          id="outlined-basic"
          label="Email"
          variant="outlined"
          color="error"
          type="text"
          name="email"
          value={email}
          onChange={handleChange}
        />
        <Input
          id="outlined-basic"
          label="Password"
          variant="outlined"
          color="error"
          type="text"
          name="password"
          value={password}
          onChange={handleChange}
        />
        <Button variant="outlined" color="error" size="medium" type="submit">
          Register
        </Button>
      </Form>
    </div>
  );
}

export default Register;
