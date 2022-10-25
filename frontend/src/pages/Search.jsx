import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { requestWithQuery } from "../helpers/apiHelpers";
import '../style/Search.css';

function Search() {
  const [information, setInformation] = useState([]);
  const navigate = useNavigate();
  const [title, setTitle] = useState('');


  async function fetchData() {
    try {
      const result = await requestWithQuery(`/search?title=${title}`);
      setInformation(result);
      return setTitle('');
    } catch(err) {
      alert('Nenhum conteúdo com esse título foi encontrado!');
      setTitle('');
    }
  }

  function change({target}) {
    const { value } = target;
    setTitle(value)
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
          <div id="search-contents">
            {
              information.map((content) => (
                <div className="search-single-content">
                  <h2>{ content.titulo }</h2>
                  <p>{content.corpo}</p>
                  <input
                    type="button"
                    value="Mais informações"
                    className="search-button"
                    onClick={() => navigate(`/${content.id}`)}
                  />
                </div>
              ))
            }
          </div>
        )}
        {!information.length && <h1>Busque seu conteúdo pelo título!</h1>}
    </div>
  );
}

export default Search;
