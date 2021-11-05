import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const NavigationLink = styled(NavLink)`
  margin: 0;
  color: darkgrey;
  font-size: 20px;
  text-decoration: none;
  margin-right: 10px;

  &.active {
    color: #1976d2;
  }

  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`;

export const Navigation = styled.nav`
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: baseline;
`;

export const Header = styled.header`
  height: auto;
  width: 100%;
  padding-bottom: 10px;
  padding-top: 10px;
  border-bottom: 2px solid #e0e0de;
`;
