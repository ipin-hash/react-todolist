import React from "react";
import PropTypes from "prop-types";

import Todo from "./todo/Todo";

const Todos = ({ todos, complateTodo }) => {
  return (
    <section className="todos">
      {todos.length > 0 &&
        todos.map((todo, index) => {
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

      {todos.length === 0 && (
        <div className="todo-placeholder-text">
          Tambahkan teks dengan klik tombol{" "}
          <span className="add-button-placeholder-text">ADD</span> di pojok kiri
          atas
        </div>
      )}
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
