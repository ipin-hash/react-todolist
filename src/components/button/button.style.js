import { css } from "@emotion/core";

export const button = ({ color, align, theme }) => {
  let textColor;
  const {
    color: { primary }
  } = theme;

  switch (color) {
    case "balck":
      textColor = primary.black;
      break;
    case "red":
      textColor = primary.red;
      break;
    default:
      textColor = primary.black;
  }

  return css`
    /* width: 24%; */
    text-align: ${align};
    font-size: 1.8rem;
    color: ${textColor};
    font-family: "bungee", sans-serif;
    padding: 16px;
    cursor: pointer;
    background: unset;
    outline: unset;
    border: unset;
  `;
};
