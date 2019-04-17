import React from "react";

const Header = () => {
  return (
    <header className="header">
      <h1 className="header__title">Contrata-se.dev</h1>
      <p className="header__text">
        Agregador de vagas para pessoas desenvolvedoras :)
      </p>
      <div className="social-media">
        <a
          href="https://github.com/frontendbr/vagas/issues/new"
          target="_blank"
          className="social-media__link"
        >
          Postar uma nova vaga
        </a>
        <iframe
          title="Star on github"
          src="https://ghbtns.com/github-btn.html?user=LarissaAbreu&repo=contrata-se-dev&type=star&size=large"
          scrolling="0"
          width="75.43px"
          height="30px"
        />
      </div>
    </header>
  );
};

export default Header;
