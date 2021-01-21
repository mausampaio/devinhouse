import { useState } from 'react';

import Button from './button';
import Modal from './modal';

import api from '../services/api';

import '../assets/styles/processDetails.css';

import placeholder120 from '../assets/images/placeholder_120.png';

const ProcessDetails = props => {
  const { process, isClicked, isRemoved } = props;

  const [isOpen, setIsOpen] = useState(false);

  const handleRemoveClick = async () => {
    await api.deleteProcess(process.id);

    isRemoved(true);

    setIsOpen(false);

    isClicked(false)
  };

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
      <footer>
        <Button 
          name="REMOVER"
          color="btn-outline"
          onClick={() => {
            setIsOpen(true);
            isRemoved(false);
          }}
        />
        <Button 
          name="EDITAR"
          color="btn-outline-blue"
        />
      </footer>
      <Modal 
      title="Confirmação de remoção" 
      open={isOpen} 
      onClose={() => setIsOpen(false)}
      >
        <div className="remove-process">
          <p>{`Deseja remover o processo: ${process.numero}?`}</p>
          <footer>
            <Button 
              name="REMOVER"
              color="btn-outline"
              onClick={() => handleRemoveClick()}
            />
            <Button 
              name="CANCELAR"
              color="btn-outline-blue"
              onClick={() => setIsOpen(false)}
            />
          </footer>
        </div>
      </Modal>
    </div>
  );
}

export default ProcessDetails;
