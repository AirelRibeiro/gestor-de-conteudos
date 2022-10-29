import React from 'react';

export default function Content(props) {
  const { content, update, deleteFunction } = props;
  return (
    <div id="content-history">
      <h1>{content.titulo}</h1>
      {content.corpo ? (
        <div
          id="content-body"
          dangerouslySetInnerHTML={{ __html: content.corpo }}
        />
      ) : (
        <h2>'Sem conteúdo'</h2>
      )}
      <div id="dates">
        <div>
          <p className="dates">
            <strong>Data de criação</strong>
          </p>
          <p className="dates">
            {` ${new Date(content.created_at)}`}
          </p>
        </div>
        <div>
          <p className="dates">
              <strong>Última atualização</strong>
          </p>
          <p className="dates">
              {` ${new Date(content.updated_at)}`}
          </p>
        </div>
      </div>
      <div id="buttons">
        <input
          type="button"
          value="Atualizar"
          className="button"
          onClick={() => update(`/update/${content.id}`)}
        />
        <input
          type="button"
          value="Excluir"
          className="button"
          onClick={deleteFunction}
        />
      </div>
    </div>
  );
}
