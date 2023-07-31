import { styled } from "styled-components";

const StyledColumnTitle = styled.h2``;

const ColumnTitle = ({ children }) => {
  return <StyledColumnTitle>{children}</StyledColumnTitle>;
};

export default ColumnTitle;
