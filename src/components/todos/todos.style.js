import { css } from "@emotion/core";

export const todoPlaceholderText = ({ theme }) =>
  css`
    font-family: "Homemade apple", sans-serif;
    font-size: 22px;
    text-align: center;
    color: ${theme.color.primary.black};
    padding: 14px;
  `;

export const addButtonPlaceholderText = ({ theme }) =>
  css`
    font-family: "bungee", sans-serif;
    font-size: 20px;
    color: ${theme.color.primary.black};
  `;

export const AboutText = () =>
  css`
    font-family: "bungee", sans-serif;
    font-size: 18px;
  `;
