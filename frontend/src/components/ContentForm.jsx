import React from 'react';

function ContentForm(props) {
  const {
    title,
    body,
    plchT,
    plchB,
    onChange,
    onClick
  } = props

  return (
      <div id="form-page">
        <form className="form">
          <input
            type="text"
            name="title"
            placeholder={plchT}
            value={title}
            id="title"
            onChange={onChange}
          />
          <textarea
          type="textarea"
          rows="5"
          cols="50"
          name="body"
          value={body}
          placeholder={plchB}
          id="body"
          onChange={onChange}
          />
        <input
          type="button"
          value="Salvar"
          className="form-button"
          onClick={onClick}
          disabled={title.length < 5 || title.length > 100}
        />
      </form>
      <div id="content-demostration">
      <h2>{ title }</h2>
      <p>{ body }</p>
      <div>
        <input
          type="button"
          value="Mais informações"
          className="form-button"
          onClick={() => alert('Recurso meramente ilustrativo!')}
        />
        <input
          type="button"
          value="Excluir"
          className="form-button"
          onClick={() => alert('Recurso meramente ilustrativo!')}
        />
      </div>
      <label for="check-button">
        Marque para exclusão
        <input
          type="checkbox"
          id="check-button"
          className="checkebox"
          onClick={() => alert('Recurso meramente ilustrativo!')}
        />
      </ label>
    </div>
      </div>
  );
}

export default ContentForm;
