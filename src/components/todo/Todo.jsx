import React from "react";
import PropTypes from "prop-types";
import styles from "./todo.module.css";

const Todo = ({ text, complateTodo, index, isComplated }) => {
  return (
    <div className={styles.todo} onClick={() => complateTodo(index)}>
      <span
        className={styles.todoText}
        style={{ textDecoration: isComplated ? "line-through" : "initial" }}
      >
        {text}
      </span>
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
