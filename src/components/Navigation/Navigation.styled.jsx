import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const NavigationLink = styled(NavLink)`
  margin: 0;
  color: darkgrey;
  font-size: 14px;
  text-decoration: none;
  margin-right: 10px;

  &.active {
    color: darkgreen;
  }

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }

  @media screen and(min-width:1024px) {
    font-size: 20px;
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
  width: 320px;
  padding-bottom: 10px;
  border-bottom: 2px solid #e0e0de;

  @media screen and (min-width: 768px) {
    width: 450px;
  }
  @media screen and (min-width: 1024px) {
    width: 600px;
  }
`;

export const Span = styled.span`
  font-size: 22px;
`;
