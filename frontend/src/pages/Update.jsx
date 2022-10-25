import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import ContentForm from '../components/ContentForm';
import { requestUpdate } from '../helpers/apiHelpers';

function Update() {
  const navigate = useNavigate();
  const location = useLocation();
  const [content, setContent] = useState({ title: '', body: '' });

  async function updateContent() {
    const { title, body } = content;
    const id = location.pathname.split('/')[2];
    let updatedContent;
    if(!body) {
      updatedContent = await requestUpdate(id, { titulo: title });
    } else {
      updatedContent = await requestUpdate(id, { titulo: title, corpo: body });
    }
    setContent({ title: '', body: '' });
    alert(updatedContent.message);
    navigate(`../${id}`);
  }

  function change({target}) {
    const { name, value } = target;
    setContent({ ...content, [name]: value })
  }

  return (
    <div className="create">
      <h1>Create</h1>
      <ContentForm
        onChange={change}
        onClick={updateContent}
        plchT="Novo Título"
        plchB="Novo Conteúdo"
        title={content.title}
        body={content.body}
      />
    </div>
  );
}

export default Update;
