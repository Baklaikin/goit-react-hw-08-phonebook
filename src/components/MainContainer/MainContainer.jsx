import styled from "@emotion/styled";

const Container = styled.div`
  margin: 0 auto;
  width: 320px;
  height: auto;
  padding: 8px;
  display: flex;
  flex-direction: column;
  text-align: center;

  @media screen and (min-width: 768px) {
    min-width: 450px;
    padding: 12px;
  }
  @media screen and (min-width: 1024px) {
    min-width: 600px;
    padding: 16px;
  }
`;

function MainContainer({ children }) {
  return <Container>{children}</Container>;
}

export default MainContainer;
