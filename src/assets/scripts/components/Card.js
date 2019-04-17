import React from "react";
import PropTypes from "prop-types";

import ListLabel from "./ListLabel.js";
import TitleCard from "./TitleCard.js";
import DateCard from "./DateCard.js";

const Card = ({ url, title, labels, date }) => {
  return (
    <li className="list-card__card">
      <a href={url} target="_blank">
        <TitleCard text={title} />
        <ListLabel labels={labels} />
        <DateCard text={date} />
      </a>
    </li>
  );
};

Card.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  labels: PropTypes.array.isRequired,
  date: PropTypes.string.isRequired
};

export default Card;
