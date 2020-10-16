/** @jsx jsx */
import { jsx } from "@emotion/core";
import { useTheme } from "emotion-theming";
import PropTypes from "prop-types";
// import styles from "./todos.module.css";

import Container from "../../layout/Container";
import Todo from "../todo/TodoClass";
import * as styles from "./todos.style";

const Todos = ({ todos, complateTodo }) => {
  const theme = useTheme();

  return (
    <section className="todos-component">
      <Container flexDirection="column" minHeight="500px">
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
          <div css={styles.todoPlaceholderText({ theme })}>
            Tambahkan teks dengan klik tombol{" "}
            <span css={styles.addButtonPlaceholderText({ theme })}>ADD</span> di
            pojok kiri atas
          </div>
        )}
      </Container>
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
