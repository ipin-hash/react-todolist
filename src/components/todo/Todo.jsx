// import React from "react";
/** @jsx jsx */
import { jsx } from "@emotion/core";
import { useTheme } from "emotion-theming";
import PropTypes from "prop-types";

import * as styles from "./todo.style";
// import styles from "./todo.module.css";

const Todo = ({ text, complateTodo, index, isComplated }) => {
  const theme = useTheme();

  return (
    <div css={styles.todo({ theme })} onClick={() => complateTodo(index)}>
      <span css={styles.todoText({ theme, isComplated })}>{text}</span>
    </div>
  );
};

Todo.PropTypes = {
  text: PropTypes.string.isRequired,
  complateTodo: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
  isComplated: PropTypes.bool.isRequered
};

export default Todo;
