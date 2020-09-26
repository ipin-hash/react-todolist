import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";

import styles from "./button.module.css";

const Button = ({ text, onClick, color, align }) => {
  // const className = [
  //   "header-btn",
  //   color === "black" && "main-black-color",
  //   color === "red" && "main-red-color",
  //   align === "left" && "align-left",
  //   align === "right" && "align-right"

  // ].join(" ");

  const className = cx(styles.headerBtn, {
    [styles.mainBlackColor]: color === "balck",
    [styles.mainRedColor]: color === "red",
    [styles.alignLeft]: align === "left",
    [styles.alignRight]: align === "right"
  });

  return (
    <button className={className} onClick={onClick}>
      {text}
    </button>
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
