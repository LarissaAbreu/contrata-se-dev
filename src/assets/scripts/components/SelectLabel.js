import React, { useState, useEffect } from 'react';
import Select from 'react-select';

const SelectLabel = ({ setFilteredLabels }) => {

  const [labels, setLabels] = useState([]);

  useEffect(() => {
    fetch('https://api.github.com/repos/frontendbr/vagas/labels?per_page=100')
      .then((res) => res.json())
      .then((json) => setLabels(json));
  }, []);

  const options = labels.map((label) => {
    return {
      value: label.name,
      label: label.name,
    };
  });

  return (
    <Select placeholder="Filtrar por labels" options={options} isMulti onChange={(option) => setFilteredLabels(option)} />
  );
};

export default SelectLabel;
