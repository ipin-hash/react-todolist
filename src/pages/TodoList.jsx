import React, { useState } from "react";

import useStateWithLocalStorage from "../hooks/useStateWithLocalStorage";
import Paper from "../components/paper/PaperClass";
import Header from "../components/header/HeaderClass";
import TodoForm from "../components/todoForm/TodoFormClass";
import Todos from "../components/todos/TodosClass";

import Container from "../layout/Container";

const TodoList = () => {
  // const [todos, setTodos] = useState([
  //   { text: "Sinau", isComplated: false },
  //   { text: "React", isComplated: false }
  // ]);

  // const [todos, setTodos] = useState(
  //   JSON.parse(localStorage.getItem("todos")) || []
  // );

  const [todos, setTodos] = useStateWithLocalStorage("todos");

  const [showAdd, setShowAdd] = useState(false);

  // useEffect(() => {
  //   localStorage.setItem("todos", JSON.stringify(todos));
  // }, [todos]);

  const addTodo = (value) => {
    if (todos.length < 9) {
      const addedTodo = [...todos, { text: value, isComplated: false }];

      setTodos(addedTodo);
    } else {
      alert(`hanya 10 baris saja!`);
      return;
    }
  };

  const complateTodo = (index) => {
    const addedTodo = [...todos];
    addedTodo[index].isComplated = !addedTodo[index].isComplated;

    setTodos(addedTodo);
  };

  const clearTodos = () => !showAdd && setTodos([]);

  const showAddToggle = () => setShowAdd(!showAdd);

  return (
    <Paper>
      <Container
        flexDirection="column"
        justifyContent="space-beetwen"
        height="100%"
      >
        <Header
          showAddToggle={showAddToggle}
          showAdd={showAdd}
          clearTodos={clearTodos}
        />
        <TodoForm addTodo={addTodo} showAdd={showAdd} />
        <Todos todos={todos} complateTodo={complateTodo} />
      </Container>
    </Paper>
  );
};

export default TodoList;
