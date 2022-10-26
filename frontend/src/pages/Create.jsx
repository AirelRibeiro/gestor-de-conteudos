import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ContentForm from '../components/ContentForm';
import { requestcreate } from '../helpers/apiHelpers';
import '../style/Form.css';

function Create() {
  const navigate = useNavigate();
  const [content, setContent] = useState({ title: '', body: '' });

  async function createContent() {
    const { title, body } = content;
    let insertedContent;
    if(!body) {
      insertedContent = await requestcreate({ titulo: title });
    } else {
      insertedContent = await requestcreate({ titulo: title, corpo: body });
    }
    setContent({ title: '', body: '' });
    navigate(`/${insertedContent.id}`);
  }

  function change({target}) {
    const { name, value } = target;
    setContent({ ...content, [name]: value })
  }

  return (
    <div className="create">
      <h1>Crie um novo conteúdo</h1>
      <ContentForm
        onChange={change}
        onClick={createContent}
        plchT="Título"
        plchB="Conteúdo"
        title={content.title}
        body={content.body}
      />
    </div>
  );
}

export default Create;
