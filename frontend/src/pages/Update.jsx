import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Demostration from '../components/Demonstration';
import Form from '../components/Form';
import { requestUpdate } from '../helpers/apiHelpers';
import '../style/Form.css';

function Update() {
  const navigate = useNavigate();
  const location = useLocation();
  const [content, setContent] = useState({ title: '', body: '' });

  async function updateContent() {
    const { title, body } = content;
    const id = location.pathname.split('/')[2];
    let updatedContent;
    if (!body) {
      updatedContent = await requestUpdate(id, { titulo: title });
    } else {
      updatedContent = await requestUpdate(id, { titulo: title, corpo: body });
    }
    setContent({ title: '', body: '' });
    alert(updatedContent.message);
    navigate(`../${id}`);
  }

  function changeTitle({ target: { value } }) {
    setContent({ ...content, title: value });
  }

  function changeBody(newBody) {
    setContent({ ...content, body: newBody });
  }

  return (
    <div className="create">
      <h1>Atualize seu conteúdo</h1>

      <div id="form-page">
        <Form
          body={content.body}
          title={content.title}
          changeTitle={changeTitle}
          changeBody={changeBody}
          onClick={updateContent}
        />
        <Demostration title={content.title} body={content.body} />
      </div>
    </div>
  );
}

export default Update;
