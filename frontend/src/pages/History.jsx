import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Content from '../components/Content';
import Updates from '../components/Updates';
import { requestDelete, requestHistory } from '../helpers/apiHelpers';
import '../style/History.css';

function History() {
  const [information, setInformation] = useState([]);
  const [showHistory, setShowHistory] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData(id) {
      const data = await requestHistory(id);
      const history = data.history.sort((a, b) => {
        return (
          new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
        );
      });
      setInformation([data.content, history]);
    }
    fetchData(location.pathname);
  }, [location]);

  async function deleteFunction() {
    const id = location.pathname.split('/')[1];
    const result = await requestDelete(id);
    alert(result.message);
    navigate('../');
  }

  return (
    <div className="history">
      {information.length && (
        <Content
          content={information[0]}
          update={navigate}
          deleteFunction={deleteFunction}
          showHistory={showHistory}
          setShowHistory={setShowHistory}
        />
      )}

      {showHistory && <Updates updates={information[1]} />}
    </div>
  );
}

export default History;
