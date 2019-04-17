import React from "react";
import PropTypes from "prop-types";

import { formateDate } from "./../utils/formate-date.js";

const DateCard = ({ text }) => {
  const date = formateDate(text);
  return <span className="card__card__date">Publicada em: {date}</span>;
};

DateCard.propTypes = {
  text: PropTypes.string.isRequired
};

export default DateCard;
