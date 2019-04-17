import "../styles/style.css";
import React, { Fragment } from "react";

import Header from "./components/Header.js";
import Footer from "./components/Footer";
import Loading from "./components/Loading";
import ListCards from "./components/ListCards";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      issues: [],
      pages: 1,
      isLoading: true,
      isLoadingButton: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    fetch(
      "https://api.github.com/repos/frontendbr/vagas/issues?state=open&page=1"
    )
      .then(res => res.json())
      .then(json => this.setState({ issues: json }))
      .then(json => this.setState({ isLoading: false }));
  }

  handleClick() {
    this.setState({ isLoadingButton: true });
    this._showMore();
  }

  _hasLoading() {
    const loadingActive = this.state.isLoading ? (
      <Loading />
    ) : (
      <ListCards data={this.state.issues} />
    );

    return loadingActive;
  }

  _hasButtonPlus() {
    if (this.state.isLoading) {
      return null;
    }
    const textButton = this.state.isLoadingButton
      ? "Carregando mais vagas"
      : "Mostrar mais";

    return (
      <button
        className="button-plus"
        disabled={this.state.isLoadingButton}
        onClick={this.handleClick}
      >
        {textButton}
      </button>
    );
  }

  _showMore() {
    fetch(
      `https://api.github.com/repos/frontendbr/vagas/issues?state=open&page=${this
        .state.pages + 1}`
    )
      .then(res => res.json())
      .then(json => {
        const issues = [...this.state.issues, ...json];
        this.setState({ issues: issues, pages: this.state.pages + 1 });
      })
      .then(json => this.setState({ isLoadingButton: false }));
  }

  render() {
    const ComponentLoadingActive = this._hasLoading();
    const ComponentButtonPlusActive = this._hasButtonPlus();
    return (
      <Fragment>
        <Header />
        <div className="main">
          {ComponentLoadingActive}
          {ComponentButtonPlusActive}
        </div>
        <Footer />
      </Fragment>
    );
  }
}

export default App;
