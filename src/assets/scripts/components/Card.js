import React from 'react';

const Card = ({ url, title, labels, date, fullWidth }) => {
  return (
    <div className="card-vaga" style={{ maxWidth: fullWidth && '100%' }}>
      <a href={url} target="_blank">
        <h2 className="titulo">{title}</h2>
        <ul className="lista-labels">{labels}</ul>
        <span className="data">Publicada em: {date}</span>
      </a>
    </div>
  )
}

export default Card;
