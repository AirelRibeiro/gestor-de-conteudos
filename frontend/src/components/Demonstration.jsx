import React from 'react';
import '../style/ContentCards.css';

function Demostration(props) {
  const { title, body } = props;
  return (
    <div className="single-content">
      <h2>{title}</h2>
      <div className="body" dangerouslySetInnerHTML={{ __html: body }} />
      <div className="div-buttons">
        <input
          type="button"
          value="Mais informações"
          className="content-button"
          onClick={() => alert('Recurso meramente ilustrativo!')}
        />
        <input
          type="button"
          value="Excluir"
          className="content-button"
          onClick={() => alert('Recurso meramente ilustrativo!')}
        />
        <label className="check-label" htmlFor="check-button">
          <input
            id="check-button"
            type="checkbox"
            className="content-checkebox"
            onClick={() => alert('Recurso meramente ilustrativo!')}
          />
          Exclusão conjunta
        </label>
      </div>
    </div>
  );
}

export default Demostration;
