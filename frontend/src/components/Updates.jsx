import React from 'react';

export default function Updates(props) {
  const { updates } = props;
  return (
    <><h1 id="history-title">Histórico de atualizações</h1><div id="updates">
      {updates.map((content, i) => (
        <div className="single-update" key={i}>
          <h3>
            {content.titulo}
          </h3>
          <p className="update-body">
            {content.corpo}
          </p>
          <p>
            <strong>Atualização feita em: </strong>
            {` ${new Date(content.created_at)}`}
          </p>
        </div>
      ))}
    </div></>
  );
}
