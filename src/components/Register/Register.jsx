import { useState } from "react";
import { useDispatch } from "react-redux";
import authOperations from "redux/auth/auth-operations";
import styled from "@emotion/styled";

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
  /* margin-right:auto; */
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
      {/* <h1>Registration page</h1> */}
      <Form action="" onSubmit={clickHandler}>
        <Label>
          Name
          <Input type="text" name="name" value={name} onChange={handleChange} />
        </Label>
        <Label>
          Email
          <Input
            type="text"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </Label>
        <Label>
          Password
          <Input
            type="text"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </Label>
        <Button type="submit">Register</Button>
      </Form>
    </div>
  );
}

export default Register;
