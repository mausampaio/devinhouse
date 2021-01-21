import '../assets/styles/processDetails.css';

import placeholder120 from '../assets/images/placeholder_120.png';

const ProcessDetails = props => {
  const { process, isClicked } = props;

  return (
    <div className="process-details-container">
      <header>
        <img src={placeholder120} alt="placeholder"/>
        <div className="header-content">
          <div className="processo">
            <h4>Processo</h4>
            <p>{process.numero}</p>
          </div>
          <div className="data">
            <h4>Data</h4>
            <p>{process.entrada}</p>
          </div>
          <div className="assunto">
            <h4>Assunto</h4>
            <p>{process.assunto}</p>
          </div>
        </div>
        <span className="close" onClick={() => isClicked(false)}>&times;</span>
      </header>
      <div className="process-details-interessados">
        <h4>Interessados</h4>
        <ul>
          {process.interessados && process.interessados.map(interessado => (
            <li key={interessado}>{interessado}</li>
          ))}
        </ul>
      </div>
      <div className="process-details-descricao">
        <h4>Descrição</h4>
        <p>{process.descricao}</p>
      </div>
    </div>
  );
}

export default ProcessDetails;
