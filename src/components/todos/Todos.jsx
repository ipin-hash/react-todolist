import React from "react";
import PropTypes from "prop-types";
import styles from "./todos.module.css";

import Todo from "../todo/Todo";

const Todos = ({ todos, complateTodo }) => {
  return (
    <section className={styles.todos}>
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
        <div className={styles.todoPlaceholderText}>
          Tambahkan teks dengan klik tombol{" "}
          <span className={styles.addButtonPlaceholderText}>ADD</span> di pojok
          kiri atas
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
