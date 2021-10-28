import styled from "@emotion/styled";
import { TextField } from "@mui/material";

export const Form = styled.form`
  width: 280px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;

  @media screen and (min-width: 768px) {
    min-width: 400px;
  }
`;

export const StyledInput = styled(TextField)`
  margin-bottom: 20px;
`;
