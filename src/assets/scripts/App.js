import React, { useState, useEffect } from 'react';
import '../styles/style.css';

import Card from './components/Card';
import Label from './components/Label';
import SelectLabel from './components/SelectLabel';

const App = () => {
  const [issues, setIssues] = useState([]);
  const [pages, setPages] = useState(1);
  const [filteredLabels, setFilteredLabels] = useState([]);

  useEffect(() => {
    fetch(`https://api.github.com/repos/frontendbr/vagas/issues?state=open&page=1&labels=${_formateLabelsQuery(filteredLabels)}`)
      .then((res) => res.json())
      .then((json) => setIssues(json));
  }, [filteredLabels]);

  const formateDate = (date) => {
    const dateSplit = date.split('T');
    const ymd = dateSplit[0].split('-');

    return `${ymd[2]}/${ymd[1]}/${ymd[0]}`;
  };

  const _formateLabelsQuery = (labels) => {
    const valueLabel = (Array.isArray(labels) ? labels : []).map((label) => label.value);
    return valueLabel.join(',');
  };

  const _showMore = () => {
    fetch(`https://api.github.com/repos/frontendbr/vagas/issues?state=open&page=${pages + 1}&labels=${_formateLabelsQuery(filteredLabels)}`)
      .then((res) => res.json())
      .then((json) => {
        setIssues([...issues, ...json]);
        setPages(pages + 1);
      });
  };

  const $issues = issues.map((issue, i) => {
    if (!issue.pull_request) {
      const date = formateDate(issue.created_at);

      const $labels = issue.labels.map((label, i) => {
        return (
          <Label
            key={i}
            name={label.name}
            color={label.color}/>
        );
      });

      return (
        <Card 
          key={i}
          url={issue.html_url}
          title={issue.title}
          labels={$labels}
          date={date} />
      );
    };
  });

  return (
    <div>
      <div className="topo">
        <h1 className="topo__titulo">Contrata-se.dev</h1>
        <p className="topo__texto">Agregador de vagas para pessoas desenvolvedoras :)</p>
        <div className="social">
          <a href="https://github.com/frontendbr/vagas/issues/new?template=adicionar-nova-vaga.md&title=%5BCidade%5D+Front-end+Developer+na+Nome+da+Empresa" target="_blank" rel="noopener noreferrer" className="nova-vaga">Postar uma nova vaga</a>
          <iframe title="Star on github" src="https://ghbtns.com/github-btn.html?user=LarissaAbreu&repo=contrata-se-dev&type=star&size=large" frameborder="0" scrolling="0" width="75.43px" height="30px"></iframe>
        </div>
      </div>
      <div className="main">
        <div className="filter-container">
          <SelectLabel setFilteredLabels={(filteredLabels) => setFilteredLabels(filteredLabels)}/>
        </div>
        <div className="lista-vagas">{$issues}</div>
        <button className="mais" onClick={() => _showMore()}>Mostrar mais</button>
      </div>
      <div className="rodape">
        <span>Feito com</span><span className="rodape__heart"></span>
      </div>
    </div>
  );
};

export default App;
