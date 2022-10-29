import { useState } from 'react';
import ContentCard from '../components/ContentCards';
import { requestWithQuery } from '../helpers/apiHelpers';
import '../style/Search.css';

function Search() {
  const [information, setInformation] = useState([]);
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
      {information.length && <ContentCard information={information} />}
      {!information.length && <h1>Busque seu conteúdo pelo título!</h1>}
    </div>
  );
}

export default Search;
