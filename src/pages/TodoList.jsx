import React, { useState } from "react";

import Paper from "../components/Paper";
import Header from "../components/Header";
import TodoForm from "../components/TodoForm";
import Todos from "../components/Todos";

const TodoList = () => {
  const [todos, setTodos] = useState([
    { text: "Sinau", isComplated: false },
    { text: "React", isComplated: false }
  ]);

  const [showAdd, setShowAdd] = useState(false);

  const showAddToggle = () => setShowAdd(!showAdd);

  const clearTodos = () => !showAdd && setTodos([]);

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

  return (
    <Paper>
      <Header
        showAddToggle={showAddToggle}
        showAdd={showAdd}
        clearTodos={clearTodos}
      />
      <TodoForm addTodo={addTodo} showAdd={showAdd} />
      <Todos todos={todos} complateTodo={complateTodo} />
    </Paper>
  );
};

export default TodoList;
