import { useNavigate } from 'react-router-dom';
import '../style/ContentCards.css';

function ContentCard(props) {
  const { information, checkFunction, deleteOne } = props;
  const navigate = useNavigate();

  return (
    <div id="contents">
      {information.map((content) => (
        <div className="single-content">
          <h2 className="title">{content.titulo}</h2>
          <div
            className="body"
            dangerouslySetInnerHTML={{ __html: content.corpo }}
          />
          <div className="div-buttons">
            <input
              type="button"
              value="Mais informações"
              className="content-button"
              onClick={() => navigate(`/${content.id}`)}
            />
            {deleteOne && (
              <input
                type="button"
                value="Excluir"
                className="content-button"
                onClick={() => deleteOne(content.id)}
              />
            )}
            {checkFunction && (
              <label className="check-label" htmlFor="check-button">
                <input
                  id="check-button"
                  type="checkbox"
                  value={content.id}
                  className="content-checkebox"
                  onClick={() => checkFunction(content.id)}
                />
                Exclusão conjunta
              </label>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ContentCard;
