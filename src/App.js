import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "emotion-theming";
import "./styles.css";

import TodoList from "./pages/TodoList";
import About from "./pages/About";

const theme = {
  color: {
    primary: {
      black: "#484848",
      red: "#e06262"
    }
  },

  background: {
    primary: {
      color: "#f2eecb"
    }
  }
};

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route exact path="/" component={TodoList} />
          <Route path="/about" component={About} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}
