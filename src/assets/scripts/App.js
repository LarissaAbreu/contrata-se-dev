import React from 'react';
import '../styles/style.css';
import Card from './components/Card';
import Label from './components/Label';
import { getFrontEndBR } from './services/api';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      issues: [],
      pages: 1
    };
  };

  componentDidMount() {
    getFrontEndBR('vagas/issues?state=open&page=1')
      .then(data => this.setState({ issues: data }));
  };

  formateDate(date) {
    const dateSplit = date.split('T');
    const ymd = dateSplit[0].split('-');

    return `${ymd[2]}/${ymd[1]}/${ymd[0]}`;
  };

  _showMore() {
    const { pages } = this.state;
    getFrontEndBR(`vagas/issues?state=open&page=${pages + 1}`)
      .then(data => {
        this.setState(prevState => ({
          issues: [...prevState.issues, ...data],
          pages: pages + 1,
        }));
      });
  }

  render () {
    const $issues = this.state.issues.map((issue, i) => {
      if (!issue.pull_request) {
        const date = this.formateDate(issue.created_at);

        const $labels = issue.labels.map((label, i) => {
          return (
            <Label
              key={i}
              name={label.name}
              color={label.color}/>
          )
        });

        return (
          <Card 
            key={i}
            url={issue.html_url}
            title={issue.title}
            labels={$labels}
            date={date} />
        )
      }
    })

    return (
      <div>
        <div className="topo">
          <h1 className="topo__titulo">Contrata-se.dev</h1>
          <p className="topo__texto">Agregador de vagas para pessoas desenvolvedoras :)</p>
          <div className="social">
            <a href="https://github.com/frontendbr/vagas/issues/new" target="_blank" className="nova-vaga">Postar uma nova vaga</a>
            <iframe title="Star on github" src="https://ghbtns.com/github-btn.html?user=LarissaAbreu&repo=contrata-se-dev&type=star&size=large" frameborder="0" scrolling="0" width="75.43px" height="30px"></iframe>
          </div>
        </div>
        <div className="main">
          <div className="lista-vagas">{$issues}</div>
          <button className="mais" onClick={() => this._showMore()}>Mostrar mais</button>
        </div>
        <div className="rodape">
          <span>Feito com</span><span className="rodape__heart"></span>
        </div>
      </div>
    )
  }
}

export default App;
