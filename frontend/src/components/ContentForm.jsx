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
          disabled={title.length < 5}
        />
      </form>
  );
}

export default ContentForm;
