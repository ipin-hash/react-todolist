import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";

import Container from "../../layout/Container";
import Todo from "../todo/TodoClass";
import * as styles from "./todos.style";

const StyledTodoPlaceholderText = styled.div`
  font-family: "Homemade apple", sans-serif;
  font-size: 22px;
  text-align: center;
  padding: 14px;
`;

const StyledAddButtonPlaceholderText = styled.span`
  font-family: "bungee", sans-serif;
  font-size: 20px;
`;

class Todos extends React.Component {
  render() {
    const { todos, complateTodo } = this.props;

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
            <StyledTodoPlaceholderText>
              {[
                "Tambahkan teks dengan klik tombol ",
                <StyledAddButtonPlaceholderText>
                  Add
                </StyledAddButtonPlaceholderText>,
                " dipojok kiri atas"
              ]}
            </StyledTodoPlaceholderText>
          )}
        </Container>
      </section>
    );
  }

  static ProtoTypes = {
    todos: PropTypes.arrayOf(
      PropTypes.shape({
        text: PropTypes.string
      })
    ),
    complateTodo: PropTypes.func.isRequired
  };
}

export default Todos;
