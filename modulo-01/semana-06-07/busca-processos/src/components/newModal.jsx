import Input from './input';
import { useState } from 'react';

import api from '../services/api';

import Button from './button';

import '../assets/styles/newModal.css';

const NewModal = props => {
  const { onClose } = props;

  const [interessado, setInteressado] = useState("");
  const [interessados, setInteressados] = useState([]);
  const [descricao, setDescricao] = useState("");
  const [assunto, setAssunto] = useState("");

  const handleAdd = () => {
    if (interessado.trim() === "") {
      setInteressado("");
    } else {
      setInteressados([...interessados, interessado]);
    }
  }

  const createProcess = async () => {
    if (interessado.trim() === "") {
      alert('O campo assunto é obritório');
      return;
    }
    const process = {
      assunto,
      descricao,
      interessados,
    };

    await api.createProcess(process);

    onClose();
  }

  return (
    <div className="new-modal-content">
      <div className="new-modal-form">
        <Input value={assunto} onChange={setAssunto} label="Assunto" name="assunto" />
        <div className="interessados">
          <h4>Interessados</h4>
          <ul>
            {interessados.map(item => (
              <li>{item}</li>
            ))}
          </ul>
        </div>
        <div className="add-interessados">
          <Input value={interessado} onChange={setInteressado} label="Novo interessado" name="interessados" />
          <Button color="btn-grey" onClick={handleAdd} />
        </div>
        <Input value={descricao} onChange={setDescricao} type="textarea" label="Descrição" />
      </div>
      <Button color="btn-blue" onClick={createProcess} />
    </div>
  );
}

export default NewModal;