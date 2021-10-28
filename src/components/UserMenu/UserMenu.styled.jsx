import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row-reverse;
  align-items: center;
  margin-left: auto;
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;
export const Title = styled.h4`
  color: darkgrey;
  font-size: 14px;
  text-decoration: none;
  align-items: center;
  margin-right: 5px;
  margin-top: 0;
  margin-bottom: 0;
  &.active {
    color: #1976d2;
  }
  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`;
