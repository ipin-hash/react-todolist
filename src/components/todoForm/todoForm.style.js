import { css } from "@emotion/core";

// export const add = () =>
//   css`
//     padding: 16px;
//   `;

// export const addForm = () =>
//   css`
//     display: flex;
//     align-items: flex-start;
//   `;

export const addInput = ({ theme }) =>
  css`
    background: unset;
    border: unset;
    padding: 0 64px;
    /* flex: 1; */
    width: 100%;
    border-bottom: 1px solid ${theme.color.primary.red};
    outline: unset;
    font-size: 16px;
    font-family: "Homemade apple", sans-serif;
    text-transform: lowercase;
  `;

export const addBtn = ({theme}) =>
  css`
    font-size: 1.8rem;
    font-family: "bungee", sans-serif;
    padding: 16px;
    cursor: pointer;
    color: ${theme.color.primary.black};
    background: unset;
    outline: unset;
    border: unset;
    &:active {
      text-shadow: 1px 1px 2px ${theme.color.primary.black};
    }
  `;
