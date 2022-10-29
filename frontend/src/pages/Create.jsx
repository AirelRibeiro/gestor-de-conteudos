import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Demonstration from '../components/Demonstration';
import Form from '../components/Form';
import { requestcreate } from '../helpers/apiHelpers';
import '../style/Form.css';

function Create() {
  const navigate = useNavigate();
  const [content, setContent] = useState({ title: '', body: '' });

  async function createContent() {
    const { title, body } = content;
    let insertedContent;
    if (!body) {
      insertedContent = await requestcreate({ titulo: title });
    } else {
      insertedContent = await requestcreate({ titulo: title, corpo: body });
    }
    setContent({ title: '', body: '' });
    navigate(`/${insertedContent.id}`);
  }

  function changeTitle({ target: { value } }) {
    setContent({ ...content, title: value });
  }

  function changeBody(newBody) {
    setContent({ ...content, body: newBody });
  }

  return (
    <div className="create">
      <h1>Crie um novo conteúdo</h1>
      <div id="form-page">
        <Form
          body={content.body}
          title={content.title}
          changeTitle={changeTitle}
          changeBody={changeBody}
          onClick={createContent}
        />
        <Demonstration title={content.title} body={content.body} />
      </div>
    </div>
  );
}

export default Create;
