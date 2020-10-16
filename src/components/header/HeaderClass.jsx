import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import { withTheme } from "emotion-theming";
// import * as styles from "./header.style";

import Container from "../../layout/Container";
import Item from "../../layout/Item";
import Button from "../button/ButtonClass";

const StyledHeaderTitle = styled.h2`
  font-size: 3.6rem;
  color: ${(props) => props.theme.color.primary.black};
  font-family: "Homemade apple";
  text-transform: lowercase;
  text-align: center;
`;

class Header extends React.Component {
  render() {
    const { showAddToggle, showAdd, clearTodos } = this.props;
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
            {/* <h1 css={styles.headerTitle(theme)}>Todo List</h1> */}
            <StyledHeaderTitle>Todo List</StyledHeaderTitle>
          </Item>

          <Item flex={1} textAlign="right">
            <Button
              text="Clear"
              color="red"
              align="right"
              onClick={clearTodos}
            />
          </Item>
        </Container>
      </section>
    );
  }

  static Proptypes = {
    showAddToggle: PropTypes.func.isRequired,
    showAdd: PropTypes.bool.isRequired,
    clearTodos: PropTypes.func.isRequired
  };
}

export default withTheme(Header);
