/** @jsx jsx */
import { jsx } from "@emotion/core";
import PropTypes from "prop-types";
import { useTheme } from "emotion-theming";

import Container from "../../layout/Container";
import Item from "../../layout/Item";
import Button from "../button/ButtonNoJSX";

import * as styles from "./header.style";

const Header = ({ showAddToggle, showAdd, clearTodos }) => {
  const theme = useTheme();

  return jsx(
    "section",
    { className: "header-component" },
    jsx(
      Container,
      { alignItems: "flex-start" },
      jsx(
        Item, //  Item pertama
        { flex: 1 },
        jsx(Button, {
          text: showAdd ? "Finish" : "Add",
          onClick: showAddToggle,
          align: "left"
        })
      ),
      jsx(
        Item, //  Item kedua
        { flex: 2 },
        jsx("h1", { css: styles.headerTitle(theme) }, "Todo List")
      ),
      jsx(
        Item, //  Item ketiga
        { flex: 1, textAlign: "right" },
        jsx(Button, {
          text: "Clear",
          color: "red",
          align: "right",
          onClick: clearTodos
        })
      )
    )
  );
};

Header.proptypes = {
  showAddToggle: PropTypes.func.isRequired,
  showAdd: PropTypes.bool.isRequired,
  clearTodos: PropTypes.func.isRequired
};

export default Header;
