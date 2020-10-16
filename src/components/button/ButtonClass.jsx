import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import { withTheme } from "emotion-theming";

const StyledButton = styled.button`
  text-align: ${(props) => props.align};
  font-size: 1.8rem;
  color: ${(props) => props.textColor};
  font-family: "bungee", sans-serif;
  padding: 16px;
  cursor: pointer;
  background: unset;
  outline: unset;
  border: unset;
`;

class Button extends React.Component {
  render() {
    const { text, onClick, color, align, theme } = this.props;
    const {
      color: { primary }
    } = theme;

    let textColor;
    switch (color) {
      case "balck":
        textColor = primary.black;
        break;
      case "red":
        textColor = primary.red;
        break;
      default:
        textColor = primary.black;
    }

    return (
      <StyledButton textColor={textColor} align={align} onClick={onClick}>
        {text}
      </StyledButton>
    );
  }

  static defaultProps = {
    text: "Button",
    color: "black",
    align: "left"
  };

  static PropTypes = {
    onClick: PropTypes.func,
    text: PropTypes.string.isRequired,
    color: PropTypes.oneOf(["black", "red"]),
    align: PropTypes.oneOf(["left", "right"])
  };
}

export default withTheme(Button);
