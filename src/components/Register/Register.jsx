import { useState } from "react";
import { useDispatch } from "react-redux";
import { Button } from "@mui/material";
import { Form, Input } from "components/Register/Register.styled";
import authOperations from "redux/auth/auth-operations";

function Register() {
  const dispatch = useDispatch();
  const [newUser, setNewUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = ({ target: { name, value } }) => {
    setNewUser((prev) => ({ ...prev, [name]: value }));
  };

  const clickHandler = (event) => {
    const { name, email, password } = newUser;
    event.preventDefault();
    dispatch(authOperations.register({ name, email, password }));
    setNewUser({
      name: "",
      email: "",
      password: "",
    });
  };

  return (
    <div>
      <Form action="" onSubmit={clickHandler}>
        <Input
          id="outlined-basic"
          required
          label="Name"
          variant="outlined"
          color="primary"
          type="text"
          name="name"
          value={newUser.name}
          onChange={handleChange}
        />
        <Input
          id="outlined-basic"
          required
          label="Email"
          variant="outlined"
          color="primary"
          type="text"
          name="email"
          value={newUser.email}
          onChange={handleChange}
        />
        <Input
          id="outlined-basic"
          required
          label="Password"
          variant="outlined"
          color="primary"
          type="text"
          name="password"
          value={newUser.password}
          onChange={handleChange}
        />
        <Button variant="outlined" color="primary" size="medium" type="submit">
          Register
        </Button>
      </Form>
    </div>
  );
}

export default Register;
