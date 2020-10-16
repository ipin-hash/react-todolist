import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import { withTheme } from "emotion-theming";

import Container from "../../layout/Container";
import Item from "../../layout/Item";
import Button from "../button/Button";

const StyledInput = styled.input`
  background: unset;
  border: unset;
  padding: 0 64px;
  width: 100%;
  border-bottom: 1px solid ${(props) => props.theme.color.primary.red};
  outline: unset;
  font-size: 16px;
  font-family: "Homemade apple", sans-serif;
  text-transform: lowercase;
`;

class TodoForm extends React.Component {
  state = {
    value: ""
  };

  handleFormSubmit = (e) => {
    const { value } = this.state;
    const { addTodo } = this.props;

    e.preventDefault();

    if (!value) {
      alert("Anda belum memasukkan teks");
      return;
    }

    if (value.length > 25) {
      alert(`Coba masukkan teks yang lebih pendek`);
      this.setState({
        value: ""
      });
      return;
    }

    addTodo(value);
    this.setState({
      value: ""
    });
  };

  handleOnChange = (e) => {
    this.setState({
      value: e.target.value
    });
  };

  render() {
    const { showAdd, theme } = this.props;

    if (showAdd) {
      return (
        <section className="todoform-component">
          <form onSubmit={this.handleFormSubmit}>
            <Container alignItems="flex-start">
              <Item flex={1} padding="0 0 0 16px">
                <StyledInput
                  type="text"
                  value={this.state.value}
                  onChange={this.handleOnChange}
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
  }
  static propTypes = {
    addTodo: PropTypes.func.isRequired,
    showAdd: PropTypes.bool.isRequired
  };
}

export default withTheme(TodoForm);
