// import React from "react";
/** @jsx jsx */
import { jsx } from "@emotion/core";
import PropTypes from "prop-types";
import { useTheme } from "emotion-theming";

import Container from "../../layout/Container";
import Item from "../../layout/Item";

import * as styles from "./header.style";

import Button from "../button/ButtonClass";

const Header = ({ showAddToggle, showAdd, clearTodos }) => {
  const theme = useTheme();
  return (
    <section className="header-component">
      <Container alignItems="flex-start">
        <Item flex={1}>
          <Button
            text={showAdd ? "Finish" : "Add"}
            onClick={showAddToggle}
            align="left"
          />
        </Item>

        <Item flex={2}>
          <h1 css={styles.headerTitle(theme)}>Todo List</h1>
        </Item>

        <Item flex={1} textAlign="right">
          <Button text="Clear" color="red" align="right" onClick={clearTodos} />
        </Item>
      </Container>
    </section>
  );
};

Header.proptypes = {
  showAddToggle: PropTypes.func.isRequired,
  showAdd: PropTypes.bool.isRequired,
  clearTodos: PropTypes.func.isRequired
};

export default Header;
