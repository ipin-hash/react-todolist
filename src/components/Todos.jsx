import React from "react";
import PropTypes from "prop-types";

import Todo from "./Todo";

const Todos = ({ todos, complateTodo }) => {
  return (
    <section className="todos">
      {todos.map((todo, index) => {
        return (
          <Todo
            key={index}
            text={todo.text}
            isComplated={todo.isComplated}
            complateTodo={complateTodo}
            index={index}
          />
        );
      })}
    </section>
  );
};

Todos.protoTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string
    })
  ),
  complateTodo: PropTypes.func.isRequired
};

export default Todos;
