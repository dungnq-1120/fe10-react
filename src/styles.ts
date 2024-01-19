import styled, { css } from "styled-components";

const Div = styled.div<{ $primary?: boolean }>`
  background-color: red;

  ${(props) =>
    props.$primary
      ? css`
          background-color: black;
          color: white;
        `
      : css`
          background-color: red;
          color: yellow;
        `};
`;

const DivCustom = styled(Div)`
  color: aqua;
`;

export { Div, DivCustom };
