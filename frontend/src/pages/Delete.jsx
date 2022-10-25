import { useEffect, useState } from "react";
import { requestDelete, requestGetAll } from "../helpers/apiHelpers";

function Delete() {
  const [information, setInformation] = useState([]);
  const [checked, setChecked] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await requestGetAll();
      setInformation(data);
    }
    fetchData();
  }, []);

  async function deleteFunction() {
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
    <div className="home">
      <h1>Home</h1>
      {information.length && (
        <div>
          {
            information.map((content) => (
              <div>
                <h2>{ content.titulo }</h2>
                <p>{content.id}</p>
                <p>{content.corpo}</p>
                <label for="check-button">
                  Marque para exclusão
                  <input
                    type="checkbox"
                    name="check-button"
                    value={content.id}
                    className="button"
                    onClick={() => checkFunction(content.id)}
                  />
                </ label>
              </div>
            ))
          }
          <input
            type="button"
            value="Excluir"
            className="button"
            onClick={deleteFunction}
          />
        </div>
      )}
    </div>
  );
}

export default Delete;