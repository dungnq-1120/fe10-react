import { styled, css } from "styled-components";

export const CardWrapper = styled.div<{
  status: "beginner" | "marketer" | "professional";
}>`
  padding: 24px;
  width: 350px;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  ${({ status }) =>
    status === "beginner" &&
    css`
      background-color: #ffed7b;
    `}

  ${({ status }) =>
    status === "marketer" &&
    css`
      background-color: #c0ffa0;
    `}

  ${({ status }) =>
    status === "professional" &&
    css`
      background-color: #7ed5f0;
    `}
`;

export const subTitle = styled.h4`
  font-weight: 500px;
  font-size: 16px;
  margin-bottom: 12px;
`;

export const Title = styled.h2`
  font-weight: 700px;
  font-size: 23px;
`;

export const Tags = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;
