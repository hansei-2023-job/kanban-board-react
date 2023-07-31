import { css, styled } from "styled-components";
import ColumnTitle from "../ColumnTitle/ColumnTitle";
import Cards from "../Cards/Cards";

const StyledColumn = styled.div`
  flex-grow: 1;

  & > button.button {
    width: 100%;
    padding: 12px 32px;
    border-radius: 5px;
    background-color: #ffffff;
    border: none;
    font-weight: bold;
    box-shadow: 3px 3px 10px #777;
  }

  &:not(:first-of-type) {
    margin-left: 27px;
  }

  ${(props) => {
    if (props.theme === "color1") {
      return css`
        div.cards {
          background-color: #00b8d9;
        }
      `;
    }
    if (props.theme === "color2") {
      return css`
        div.cards {
          background-color: #f4f5f7;
        }
      `;
    }
    if (props.theme === "color3") {
      return css`
        div.cards {
          background-color: #57d9a3;
        }
      `;
    }
  }}
`;

const Column = ({ theme, title, openCard }) => {
  return (
    <StyledColumn theme={theme}>
      <ColumnTitle>{title}</ColumnTitle>
      <Cards theme={theme} openCard={openCard} />
    </StyledColumn>
  );
};

export default Column;
