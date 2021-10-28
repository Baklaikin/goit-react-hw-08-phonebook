import { useState } from "react";
import { useDispatch } from "react-redux";
import { Button } from "@mui/material";
import { Form, Input } from "components/Register/Register.styled";
import authOperations from "redux/auth/auth-operations";

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
