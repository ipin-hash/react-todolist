import React, { useState } from "react";

import Paper from "../components/Paper";
import Header from "../components/Header";
import TodoForm from "../components/TodoForm";
import Todos from "../components/Todos";

const TodoList = () => {
  const [todos, setTodos] = useState([
    { text: "Sinau cok" },
    { text: "React" }
  ]);

  const [showAdd, setShowAdd] = useState(false);

  const showAddToggle = () => setShowAdd(!showAdd);

  const addTodo = (value) => {
    const addedTodo = [...todos, { text: value }];

    setTodos(addedTodo);
  };

  return (
    <Paper>
      <Header showAddToggle={showAddToggle}/>
      <TodoForm addTodo={addTodo} showAdd={showAdd}/>
      <Todos todos={todos} />
    </Paper>
  );
};

export default TodoList;
