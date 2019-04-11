import React from 'react';
import '../styles/style.css';
import tinyColor from 'tinycolor2';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      issues: []
    };
  }

  componentDidMount() {
    fetch('https://api.github.com/repos/frontendbr/vagas/issues?state=open')
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        this.setState({issues: json})
      });
  }

  formateDate(date) {
    const dateSplit = date.split('T');
    const ymd = dateSplit[0].split('-');

    return `${ymd[2]}/${ymd[1]}/${ymd[0]}`;
  }

  resolveColor(hex) {
    const color = tinyColor(hex);
    if (color.isLight()) {
      return '000'
    } else {
      return 'fff'
    };
  };

  render () {
    const $issues = this.state.issues.map((issue, i) => {
      if (!issue.pull_request) {
        const date = this.formateDate(issue.created_at);

        const $labels = issue.labels.map((label, i) => {
          return (
            <li
              className="label"
              style={{"--background-label": "#" + label.color, "--color-label": "#" + this.resolveColor(label.color)}}
            >
              {label.name}
            </li>
          )
        });

        return (
          <div className="card-vaga">
            <a href={issue.html_url} target="_blank">
              <h2 className="titulo">{issue.title}</h2>
              <ul className="lista-labels">{$labels}</ul>
              <span className="data">Publicada em: {date}</span>
            </a>
          </div>
        )
      }
    })

    return (
      <div>
        <div className="topo">
          <h1 className="topo__titulo">Contrata-se dev</h1>
          <p className="topo__texto">Veja abaixo uma relação de empresas que estão precisando de devs... Boa sorte :D</p>
          <a href="https://github.com/frontendbr/vagas/issues/new" target="_blank" className="nova-vaga">Postar uma nova vaga</a>
        </div>
        <div className="main">
          <div className="lista-vagas">{$issues}</div>
        </div>
        <div className="rodape">
          <span>Feito com</span><span className="rodape__heart"></span>
        </div>
      </div>
    )
  }
}

export default App;
