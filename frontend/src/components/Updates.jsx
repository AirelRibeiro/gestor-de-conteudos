import React from 'react';

export default function Updates(props) {
  const { updates } = props;
  return (
    <div id="updates">
      {
        updates.map((content, i) => (
          <div key={i}>
            <h3>
              Título - 
              {` ${content.titulo}`}
            </h3>
            <p>
              <strong>Conteúdo: </strong>
              {` ${content.corpo}`}
            </p>
            <p>
              <strong>Atualização feita em: </strong>
              {` ${new Date(content.created_at)}`}
            </p>
          </div>
        ))
      }
    </div>
  );
}
