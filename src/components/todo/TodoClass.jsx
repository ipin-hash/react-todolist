import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import { withTheme } from "emotion-theming";

const StyledTodo = styled.div`
  position: relative;
  flex: 1 0 auto;
  text-align: center;
  max-height: 34px;
  font-size: 24px;
  margin: 16px 0 0;
  font-family: "Homemade apple", sans-serif;
  border-bottom: 1px solid ${(props) => props.theme.color.primary.red};
`;

const StyledTodoText = styled.span`
  width: 100%;
  height: 50px;
  position: absolute;
  left: 50%;
  color: ${(props) => props.theme.color.primary.black};
  text-decoration: ${props => props.isComplated ? "line-through" : "initial"};
  transform: translate(-50%);
`;

class Todo extends React.Component {
  render() {
    const { text, complateTodo, index, isComplated, theme} = this.props
    return (
      <StyledTodo theme={theme} onClick={() => complateTodo(index)}>
        <StyledTodoText theme={theme} isComplated={isComplated}>{text}</StyledTodoText>
      </StyledTodo>
    );
  }
  static PropTypes = {
    text: PropTypes.string.isRequired,
    complateTodo: PropTypes.func.isRequired,
    index: PropTypes.number.isRequired,
    isComplated: PropTypes.bool.isRequered
  };
}


export default withTheme(Todo)