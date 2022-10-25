import React from 'react';

export default function Content(props) {
  const { content, update, deleteFunction } = props;
  return (
    <div>
      <h1>{content.titulo}</h1>
      <p>
        <strong>Conteúdo: </strong>
        {` ${content.corpo ? content.corpo : 'Sem conteúdo'}`}
      </p>
      <p>
        <strong>Conteúdo criado em: </strong>
        {` ${new Date(content.created_at)}`}
      </p>
      <p>
          <strong>Última atualização: </strong>
          {` ${new Date(content.updated_at)}`}
      </p>
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
  );
}
