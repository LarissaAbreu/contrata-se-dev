import React from "react";
import PropTypes from "prop-types";

const ListLabel = ({ labels }) => {
  return <ul className="list-labels">{labels}</ul>;
};

ListLabel.propTypes = {
  labels: PropTypes.array.isRequired
};

export default ListLabel;
