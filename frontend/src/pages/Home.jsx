import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { requestDelete, requestGetAll } from "../helpers/apiHelpers";

function Home() {
  const [information, setInformation] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      const data = await requestGetAll();
      console.log(data);
      setInformation(data);
    }
    fetchData();
  }, []);

  async function deleteFunction(id) {
    const result = await requestDelete(id);
    alert(result.message);
    window.location.reload()
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
                <input
                  type="button"
                  value="Mais informações"
                  className="button"
                  onClick={() => navigate(`/${content.id}`)}
                />
                <input
                  type="button"
                  value="Excluir"
                  className="button"
                  onClick={() => deleteFunction(content.id)}
                />
              </div>
            ))
          }
        </div>
      )}
    </div>
  );
}

export default Home;