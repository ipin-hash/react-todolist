/** @jsx jsx */
import { jsx } from "@emotion/core";
import PropTypes from "prop-types";
import { useTheme } from "emotion-theming";

import * as styles from "./button.style";

const Button = ({ text, onClick, color, align }) => {
  const theme = useTheme();

  return jsx(
    "button",
    {
      css: styles.button({ align, color, theme }),
      onClick: onClick
    },
    text
  );
};

Button.defaultProps = {
  text: "Button",
  color: "black",
  align: "left"
};

Button.PropTypes = {
  onClick: PropTypes.func,
  text: PropTypes.string.isRequired,
  color: PropTypes.oneOf(["black", "red"]),
  align: PropTypes.oneOf(["left", "right"])
};

export default Button;
