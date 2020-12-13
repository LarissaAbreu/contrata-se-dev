import React from 'react';
import tinyColor from 'tinycolor2';

const Label = ({color, name}) => {

  const resolveColor = hex => {
    const color = tinyColor(hex);

    return color.isLight() ? '000' : 'fff';
  };

  return (
    <li
      className="label"
      style={{"--background-label": "#" + color, "--color-label": "#" + resolveColor(color)}}
    >
      {name}
    </li>
  );
};

export default Label;
