import { css } from "@emotion/core";

// export const header = () =>
//   css`
//     display: flex;
//     align-items: flex-start;
//   `;

export const headerTitle = (theme) =>
  css`
    font-size: 3.6rem;
    color: ${theme.color.primary.black};
    font-family: "Homemade apple";
    text-transform: lowercase;
    text-align: center;
  `;
