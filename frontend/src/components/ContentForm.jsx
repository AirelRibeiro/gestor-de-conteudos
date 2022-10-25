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
        <label htmlFor="title">
          <input
            type="text"
            name="title"
            placeholder={plchT}
            value={title}
            id="title"
            onChange={onChange}
          />
        </label>
        <label htmlFor="body">
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
        </label>
        <input
          type="button"
          value="Salvar"
          className="button"
          onClick={onClick}
          disabled={title.length < 5}
        />
      </form>
  );
}

export default ContentForm;
