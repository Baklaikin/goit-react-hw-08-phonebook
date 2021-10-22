import styled from "@emotion/styled";

const Form = styled.form`
  margin-left: auto;
  margin-right: auto;
`;

const Button = styled.button`
  margin-left: 10px;
`;

export const LogIn = () => {
  return (
    <Form action="auth">
      <label>
        Name
        <input type="text" autoComplete="off" />
      </label>
      <label>
        Email
        <input type="text" autoComplete="off" />
      </label>
      <label>
        Password
        <input type="text" autoComplete="off" />
      </label>
      <Button type="submit">Войти</Button>
    </Form>
  );
};
