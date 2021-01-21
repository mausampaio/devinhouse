import placeholder from '../assets/images/placeholder.png';

import '../assets/styles/processesCard.css';

const ProcessesCard = props => {
  const { process, onClick, isClicked } = props;

  return (
    <div onClick={onClick} className={`card-container ${isClicked && 'clicked'}`}>
      {!isClicked &&
        <img src={placeholder} alt="placeholder"/>
      }
      <div className="card-content">
        <div className="numero">
          <h4>Número</h4>
          <p>{process.numero}</p>
        </div>
        <div className="assunto">
          <h4>Assunto</h4>
          <p>{process.assunto}</p>
        </div>
        <div className="interessado">
          <h4>Interessado</h4>
          <p>{process.interessados[0]}</p>
        </div>
        {!isClicked &&
          <div className="descricao">
            <h4>Descrição</h4>
            <p>{process.descricao}</p>
          </div>
        }
      </div>
    </div>
  );
}

export default ProcessesCard;
