import { useState } from 'react';
import ContentCard from '../components/ContentCards';
import { requestWithQuery, requestDelete } from '../helpers/apiHelpers';
import '../style/Search.css';

function Search() {
  const [information, setInformation] = useState([]);
  const [checked, setChecked] = useState([]);
  const [title, setTitle] = useState('');

  async function fetchData() {
    try {
      const result = await requestWithQuery(`/search?title=${title}`);
      setInformation(result);
      return setTitle('');
    } catch (err) {
      alert('Nenhum conteúdo com esse título foi encontrado!');
      setTitle('');
    }
  }

  function change({ target }) {
    const { value } = target;
    setTitle(value);
  }

  async function deleteOne(id) {
    const result = await requestDelete(id);
    const newInformation = information.filter((content) => content.id !== id);
    alert(result.message);
    setChecked([]);
    setInformation(newInformation);
  }

  async function deleteMany() {
    const result = await Promise.all(checked.map((id) => requestDelete(id)));
    const newInformation = information.filter(
      (content) => !checked.includes(content.id)
    );
    alert(`${result.length} conteúdos foram excluídos com sucesso!`);
    setChecked([]);
    setInformation(newInformation);
  }

  async function checkFunction(id) {
    if (checked.includes(id)) {
      const newChekedList = checked.filter((check) => check !== id);
      return setChecked(newChekedList);
    }
    return setChecked([...checked, id]);
  }

  return (
    <div id="search">
      <div id="search-fields">
        <input
          type="text"
          name="title"
          placeholder="Título"
          id="title-input"
          value={title}
          onChange={change}
        />
        <input
          type="button"
          value="Buscar"
          id="search-button"
          onClick={fetchData}
        />
      </div>
      {information.length && (
        <>
          <input
            type="button"
            value="Excluir conteúdos selecionados"
            id="delete-button"
            onClick={deleteMany}
          />
          <ContentCard
            information={information}
            deleteOne={deleteOne}
            checkFunction={checkFunction}
          />
        </>
      )}
      {!information.length && <h1>Busque seu conteúdo pelo título!</h1>}
    </div>
  );
}

export default Search;
