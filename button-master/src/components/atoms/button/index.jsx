import React from "react";
import { ButtonStyle } from "./styledComponents";
import propTypes from "prop-types";

function Button({ text }) {
  return <ButtonStyle    >{text}</ButtonStyle>;
}

Button.propTypes = {
  text: propTypes.string,
  hover: propTypes.bool,
  focus: propTypes.bool
};

export default Button;
