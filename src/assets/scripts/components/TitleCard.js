import React from "react";
import PropTypes from "prop-types";

const TitleCard = ({ text }) => {
  return <h2 className="list-card__card__title">{text}</h2>;
};

TitleCard.propTypes = {
  text: PropTypes.string.isRequired
};

export default TitleCard;
