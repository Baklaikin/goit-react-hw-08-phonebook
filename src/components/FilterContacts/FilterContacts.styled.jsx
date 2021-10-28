import styled from "@emotion/styled";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 320px;
  margin-left: auto;
  margin-right: auto;
  @media screen and (min-width: 768px) {
    width: 450px;
  }
  @media screen and (min-width: 1024px) {
    width: 600px;
  }
`;
