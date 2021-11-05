import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  margin: 10px auto 0;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    margin: 0;
  }
`;
export const Title = styled.h4`
  color: darkgrey;
  font-size: 14px;
  text-decoration: none;
  align-items: center;
  margin-right: 5px;
  margin-top: 0;
  margin-bottom: 15px;
  &.active {
    color: #1976d2;
  }
  @media screen and (min-width: 768px) {
    font-size: 16px;
    margin-bottom: 5px;
  }
`;
