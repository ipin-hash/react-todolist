import { css } from "@emotion/core";

export const todo = ({ theme }) =>
  css`
    position: relative;
    flex: 1 0 auto;
    text-align: center;
    max-height: 34px;
    font-size: 24px;
    margin: 16px 0 0;
    font-family: "Homemade apple", sans-serif;
    border-bottom: 1px solid ${theme.color.primary.red};
  `;

export const todoText = ({ theme, isComplated }) =>
  css`
    width: 100%;
    height: 50px;
    position: absolute;
    left: 50%;
    color: ${theme.color.primary.black};
    text-decoration: ${isComplated ? "line-through" : "initial"};
    transform: translate(-50%);
  `;
