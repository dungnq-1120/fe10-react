import { styled, css } from "styled-components";

export const ButtonStyled = styled.button<{ status: 'beginner' | "marketer" | "professional" }>`
  color: white;
  border: none;
  border-radius: 5px;
  min-width: 50px;
  /* width: 100%; */
  padding: 10px 16px;

  margin: 6px;

  ${({ status }) =>
    status === "beginner" &&
    css`
      background-color: #e0bb00;
    `}

  ${({ status }) =>
    status === "marketer" &&
    css`
      background-color: #65BA3B;
    `}

  ${({ status }) =>
    status === "professional" &&
    css`
      background-color: #1698C0;
    `}
`;
