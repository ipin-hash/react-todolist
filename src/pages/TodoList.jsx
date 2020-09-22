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

  const addTodo = (value) => {
    const addedTodo = [...todos, { text: value, isComplated: false }];

    setTodos(addedTodo);
  };

  const complateTodo = (index) => {
    const addedTodo = [...todos];
    addedTodo[index].isComplated = !addedTodo[index].isComplated;

    setTodos(addedTodo);
  };

  // console.log("todos", todos);

  return (
    <Paper>
      <Header showAddToggle={showAddToggle} showAdd={showAdd} />
      <TodoForm addTodo={addTodo} showAdd={showAdd} />
      <Todos todos={todos} complateTodo={complateTodo} />
    </Paper>
  );
};

export default TodoList;
