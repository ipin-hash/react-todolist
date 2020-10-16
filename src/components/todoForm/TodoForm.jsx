import React from "react";
import PropTypes from "prop-types";

/** @jsx jsx */
import { jsx } from "@emotion/core";
import { useTheme } from "emotion-theming";

import Container from "../../layout/Container";
import Item from "../../layout/Item";
import Button from "../button/Button";
import * as styles from "./todoForm.style";
// import styles from "./todoForm.module.css";

const TodoForm = ({ addTodo, showAdd }) => {
  const [value, setValue] = React.useState("");
  const theme = useTheme();

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!value) {
      alert("Anda belum memasukkan teks");
      return;
    }

    if (value.length > 25) {
      alert(`Coba masukkan teks yang lebih pendek`);
      setValue("");
      return;
    }

    addTodo(value);
    setValue("");
  };

  if (showAdd) {
    return (
      <section className="todoform-component">
        <form onSubmit={handleFormSubmit}>
          <Container alignItems="flex-start">
            <Item flex={1} padding="0 0 0 16px">
              <input
                type="text"
                css={styles.addInput({ theme })}
                value={value}
                onChange={(e) => setValue(e.target.value)}
              />
            </Item>
            <Item>
              <Button text="Add" color="black" align="left" />
            </Item>
          </Container>
        </form>
      </section>
    );
  } else {
    return null;
  }
};

TodoForm.propTypes = {
  addTodo: PropTypes.func.isRequired,
  showAdd: PropTypes.bool.isRequired
};

export default TodoForm;
