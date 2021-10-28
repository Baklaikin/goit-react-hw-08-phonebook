import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 320px;
  padding: 18px;

  @media screen and (min-width: 768px) {
    width: 450px;
  }
  @media screen and (min-width: 1024px) {
    width: 600px;
  }
`;

export const Title = styled.h1`
  margin: 0;
  padding: 0;
  font-size: 22px;
  color: #000;
  @media screen and (min-width: 768px) {
    font-size: 18px;
    margin-bottom: 20px;
  }
`;

export const Text = styled.p`
  padding: 0;
  font-size: 18px;
  color: darkgrey;
  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
`;
