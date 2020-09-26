import React from "react";
import PropTypes from "prop-types";
import styles from "./header.module.css";

import Button from "../button/Button";

const Header = ({ showAddToggle, showAdd, clearTodos }) => {
  return (
    <section className={styles.header}>
      <Button
        text={showAdd ? "Finish" : "Add"}
        onClick={showAddToggle}
        align="left"
      />
      <h1 className={styles.headerTitle}>Todo List</h1>
      <Button text="Clear" color="red" align="right" onClick={clearTodos} />
    </section>
  );
};

Header.proptypes = {
  showAddToggle: PropTypes.func.isRequired,
  showAdd: PropTypes.bool.isRequired,
  clearTodos: PropTypes.func.isRequired
};

export default Header;
