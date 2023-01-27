import { useEffect, useState } from 'react';
import ContentCard from '../components/ContentCards';
import { requestDelete, requestGetAll } from '../helpers/apiHelpers';
import { contentsArray } from '../mocks/Content.mock';
import '../style/Home.css';

function Home() {
  const [information, setInformation] = useState([]);
  const [checked, setChecked] = useState([]);

  useEffect(() => {
    async function fetchData() {
      // const data = await requestGetAll();
      console.log(contentsArray);
      setInformation(contentsArray);
    }
    fetchData();
  }, []);

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
    <div id="home">
      <h1>Lista de conteúdos</h1>
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
