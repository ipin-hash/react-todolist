import { css } from "@emotion/core";

export const button = ({ color, align }) => {
  let textColor;

  switch (color) {
    case "balck":
      textColor = "#484848";
      break;
    case "red":
      textColor = "#e06262";
      break;
    default:
      textColor = "#484848";
  }

  return css`
    width: 24%;
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
