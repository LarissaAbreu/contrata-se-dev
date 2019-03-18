import React from 'react';

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

  render () {
    const $issues = this.state.issues.map((issue, i) => {
      const date = this.formateDate(issue.created_at);

      const $labels = issue.labels.map((label, i) => {
        return ( <li>{label.name}</li> )
      });

      return (
        <div>
          <a href={issue.html_url} target="_blank">
            <h2>{issue.title}</h2>
            <ul>{$labels}</ul>
            <span>{date}</span>
          </a>
        </div>
      )
    })

    return (
      <div>
        <a href="https://github.com/frontendbr/vagas/issues/new" target="_blank">Postar uma nova vaga</a>
        <div>{$issues}</div>
      </div>
    )
  }
}

export default App;
