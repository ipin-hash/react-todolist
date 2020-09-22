import React from "react";
import PropTypes from "prop-types";

const Todo = ({ text, complateTodo, index, isComplated }) => {
  return (
    <div className="todo" onClick={() => complateTodo(index)}>
      <span
        className="todo-text"
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
