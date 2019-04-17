import React from "react";
import PropTypes from "prop-types";
import tinyColor from "tinycolor2";

const Label = ({ color, name }) => {
  const resolveColor = hex => {
    const color = tinyColor(hex);
    return color.isLight() ? "000" : "fff";
  };

  return (
    <li
      className="list-labels__label"
      style={{
        "--background-label": "#" + color,
        "--color-label": "#" + resolveColor(color)
      }}
    >
      {name}
    </li>
  );
};

Label.propTypes = {
  color: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};

export default Label;
