import styled from "@emotion/styled";

export const List = styled.ul`
  box-sizing: border-box;
  width: 320px;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
  list-style: none;
  border: 1px solid #c2bfbf;
  border-radius: 4px;
  padding: 8px;

  @media screen and (min-width: 768px) {
    width: 450px;
  }
  @media screen and (min-width: 1024px) {
    width: 600px;
  }
`;

export const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #e0e0de;
  margin-bottom: 4px;
  padding-bottom: 4px;
  width: auto;
  color: grey;
`;

export const Number = styled.span`
  margin-left: auto;
  margin-right: 20px;
`;
