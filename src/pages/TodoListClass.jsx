import React from "react";

import Paper from "../components/paper/PaperClass";
import Header from "../components/header/HeaderClass";
import TodoForm from "../components/todoForm/TodoFormClass";
import Todos from "../components/todos/TodosClass";

import Container from "../layout/Container";

class TodoList extends React.Component {
  state = {
    todos: [
      { text: "Sinau", isComplated: false },
      { text: "React", isComplated: false }
    ],
    showAdd: false
  };

  addTodo = (value) => {
    const { todos } = this.state;
    if (todos.length < 10) {
      const addedTodo = [...todos, { text: value, isComplated: false }];

      this.setState({
        todos: addedTodo
      });
    } else {
      alert(`hanya 10 baris saja!`);
    }
  };

  complateTodo = (index) => {
    const addedTodo = [...this.state.todos];
    addedTodo[index].isComplated = !addedTodo[index].isComplated;

    this.setState({
      todos: addedTodo
    });
  };

  clearTodos = () => {
    if (this.state.showAdd) {
      alert("klik tombol finish sebelum menghapus");
      return;
    }
    this.setState({
      todos: []
    });
  };

  showAddToggle = () => {
    this.setState((prevState) => ({ showAdd: !prevState.showAdd }));
  };

  render() {
    const { todos, showAdd } = this.state;
    return (
      <Paper>
        <Container
          flexDirection="column"
          justifyContent="space-beetwen"
          height="100%"
        >
          <Header
            showAddToggle={this.showAddToggle}
            showAdd={showAdd}
            clearTodos={this.clearTodos}
          />
          <TodoForm addTodo={this.addTodo} showAdd={showAdd} />
          <Todos todos={todos} complateTodo={this.complateTodo} />
        </Container>
      </Paper>
    );
  }
}

export default TodoList;
