import styled from "styled-components";

const StyledContainer = styled.div`
  width: 100%;
  height: 100vh;
  padding: 12px 32px;
  box-sizing: border-box;
`;

const Container = ({ children }) => {
  return <StyledContainer>{children}</StyledContainer>;
};

export default Container;
