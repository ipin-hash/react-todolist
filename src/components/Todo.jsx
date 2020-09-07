import React from "react";
import PropTypes from "prop-types";

const Todo = (prop) => {
  return (
    <div className="todo">
      <span className="todo-text">{prop.text}</span>
    </div>
  );
};

Todo.PropTypes = {
  text: PropTypes.string.isRequired
}

export default Todo;