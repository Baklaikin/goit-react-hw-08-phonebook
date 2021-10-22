import styled from "@emotion/styled";

const HeaderWrapper = styled.div`
  display: flex;
  flex-wrap: nowrap;
  padding: 16px;
  margin-bottom: 10px;
`;

function Header({ children }) {
  return <HeaderWrapper>{children}</HeaderWrapper>;
}

export default Header;
