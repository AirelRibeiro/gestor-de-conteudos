import { useEffect, useState } from 'react';
import ContentCard from '../components/ContentCards';
import { requestDelete, requestGetAll } from '../helpers/apiHelpers';
import '../style/Home.css';

function Home() {
  const [information, setInformation] = useState([]);
  const [checked, setChecked] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await requestGetAll();
      setInformation(data);
    }
    fetchData();
  }, []);

  async function deleteOne(id) {
    const result = await requestDelete(id);
    alert(result.message);
    window.location.reload();
  }

  async function deleteMany() {
    const result = await Promise.all(checked.map((id) => requestDelete(id)));
    alert(`${result.length} conteúdos foram excluídos com sucesso!`);
    window.location.reload();
  }

  async function checkFunction(id) {
    if (checked.includes(id)) {
      const newChekedList = checked.filter((check) => check !== id);
      return setChecked(newChekedList);
    }
    return setChecked([...checked, id]);
  }

  return (
    <div id="home">
      <h1>Conteúdos Motrix</h1>
      <input
        type="button"
        value="Excluir conteúdos selecionados"
        id="delete-button"
        onClick={deleteMany}
      />
      {information.length && (
        <ContentCard
          information={information}
          deleteOne={deleteOne}
          checkFunction={checkFunction}
        />
      )}
    </div>
  );
}

export default Home;
