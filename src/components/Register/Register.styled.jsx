import styled from "@emotion/styled";
import { TextField } from "@mui/material";

export const Form = styled.form`
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

export const Input = styled(TextField)`
  margin-bottom: 10px;
`;
