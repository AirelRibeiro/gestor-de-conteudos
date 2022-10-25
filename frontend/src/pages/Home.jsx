import { useEffect, useState } from "react";
import { requestGetAll } from "../helpers/apiHelpers";

function Home() {
  const [information, setInformation] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const data = await requestGetAll();
      console.log(data);
      setInformation(data);
    }
    fetchData();
  }, []);

  return (
    <div className="home">
      <h1>Home</h1>
      {information.length && (
        <div>
          {
            information.map((content) => (
              <h1>{ content.titulo }</h1>
            ))
          }
        </div>
      )}
    </div>
  );
}

export default Home;