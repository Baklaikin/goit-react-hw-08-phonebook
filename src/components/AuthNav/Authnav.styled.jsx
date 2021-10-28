import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const NavigationLink = styled(NavLink)`
  color: darkgrey;
  font-size: 20px;
  text-decoration: none;
  &.active {
    color: #1976d2;
  }
  &:not(:last-child) {
    margin-right: 10px;
  }
`;
