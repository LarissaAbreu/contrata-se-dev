import React, { Fragment } from "react";
import PropTypes from "prop-types";

import Card from "./Card.js";
import Label from "./Label.js";

const hasPullRequest = dataParam => (!dataParam.pull_request ? true : false);

const createLabels = dataLabels => {
  const data = dataLabels.map((label, i) => {
    return <Label key={i} name={label.name} color={label.color} />;
  });
  return data;
};

const ListCards = ({ data }) => {
  const $issues = data.map((issue, i) => {
    if (hasPullRequest(issue)) {
      const $labels = createLabels(issue.labels);
      return (
        <Card
          key={i}
          url={issue.html_url}
          title={issue.title}
          labels={$labels}
          date={issue.created_at}
        />
      );
    }
  });
  return <ul className="list-card">{$issues}</ul>;
};

ListCards.propTypes = {
  data: PropTypes.array.isRequired
};

export default ListCards;
