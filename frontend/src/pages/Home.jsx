import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { requestDelete, requestGetAll } from "../helpers/apiHelpers";
import '../style/Home.css';

function Home() {
  const [information, setInformation] = useState([]);
  const [checked, setChecked] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      const data = await requestGetAll();
      console.log(data);
      setInformation(data);
    }
    fetchData();
  }, []);

  async function deleteOne(id) {
    const result = await requestDelete(id);
    alert(result.message);
    window.location.reload()
  }

  async function deleteMany() {
    const result = await Promise.all(checked.map((id) => requestDelete(id)));
    alert(`${result.length} conteúdos foram excluídos com sucesso!`);
    window.location.reload()
  }

  async function checkFunction(id) {
    if(checked.includes(id)) {
      const newChekedList = checked.filter((check) => check !== id);
      return setChecked(newChekedList);
    }
    return setChecked([...checked, id]);
  }

  return (
    <div id="home">
      <h1>Conteúdos</h1>
      <input
            type="button"
            value="Excluir conteúdos selecionados"
            id="delete-button"
            onClick={deleteMany}
          />
      {information.length && (
        <div id="home-contents">
          {
            information.map((content) => (
              <div className="home-single-content">
                <h2>{ content.titulo }</h2>
                <p>{content.corpo}</p>
                <div>
                  <input
                    type="button"
                    value="Mais informações"
                    className="home-button"
                    onClick={() => navigate(`/${content.id}`)}
                  />
                  <input
                    type="button"
                    value="Excluir"
                    className="home-button"
                    onClick={() => deleteOne(content.id)}
                  />
                </div>
                <label for="check-button">
                  Marque para exclusão
                  <input
                    type="checkbox"
                    id="check-button"
                    value={content.id}
                    className="checkebox"
                    onClick={() => checkFunction(content.id)}
                  />
                </ label>
              </div>
            ))
          }
        </div>
      )}
    </div>
  );
}

export default Home;
