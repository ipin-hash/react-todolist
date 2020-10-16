import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

const useStateWithLocalStorage = (localStorageKey) => {
  const [todos, setTodos] = React.useState(
    JSON.parse(localStorage.getItem(localStorageKey)) || []
  );

  useEffect(() => {
    localStorage.setItem(localStorageKey, JSON.stringify(todos));
  }, [todos, localStorageKey]);

  return [todos, setTodos];
};

useStateWithLocalStorage.prototypes = {
  localStorageKey: PropTypes.string.isRequired
};

export default useStateWithLocalStorage;
