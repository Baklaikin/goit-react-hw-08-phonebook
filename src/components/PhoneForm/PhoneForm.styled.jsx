import styled from "@emotion/styled";
import { TextField } from "@mui/material";

export const Form = styled.form`
  width: 320px;
  height: auto;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
  margin-bottom: 20px;
  border: 1px solid #e0e0de;
  border-radius: 4px;
  padding: 8px;
  box-sizing: border-box;

  @media screen and (min-width: 768px) {
    width: 450px;
  }
  @media screen and (min-width: 1024px) {
    width: 600px;
  }
`;

export const FormLabel = styled(TextField)`
  margin-bottom: 10px;
`;

export const Div = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  height: auto;
  border-radius: 4px;
`;
