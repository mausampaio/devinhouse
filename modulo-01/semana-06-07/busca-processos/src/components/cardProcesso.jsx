import placeholder from '../assets/images/placeholder.png';

import '../assets/styles/cardProcesso.css';

const CardProcesso = props => {
  const { process } = props;

  return (
    <div className="card-container">
      <img src={placeholder} alt="placeholder"/>
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
        <div className="descricao">
          <h4>Descrição</h4>
          <p>{process.descricao}</p>
        </div>
      </div>
    </div>
  );
}

export default CardProcesso;
