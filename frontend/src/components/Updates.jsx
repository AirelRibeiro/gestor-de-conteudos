import React from 'react';
import { requestUpdate } from '../helpers/apiHelpers';

export default function Updates(props) {
  const { updates } = props;

  async function updateContent(title, body, id) {
    if (!body) {
      await requestUpdate(id, { titulo: title });
    } else {
      await requestUpdate(id, { titulo: title, corpo: body });
    }
    alert('Versão de conteúdo recuperada com sucesso!');
    window.window.location.reload();
  }

  return (
    <>
      <h1 id="history-title">Histórico de atualizações</h1>
      <div id="updates">
        {updates.map((content, i) => (
          <div className="single-update" key={i}>
            <h3>{content.titulo}</h3>
            <div
              className="body"
              dangerouslySetInnerHTML={{ __html: content.corpo }}
            />
            <p className="history-dates">
              <strong>Atualização feita em: </strong>
              {` ${new Date(content.created_at)}`}
            </p>
            <input
              type="button"
              value="Voltar para esta versão"
              className="back-button"
              onClick={() =>
                updateContent(content.titulo, content.corpo, content.content_id)
              }
            />
          </div>
        ))}
      </div>
    </>
  );
}
