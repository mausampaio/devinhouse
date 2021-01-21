import Input from './input';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { FiTrash2 } from 'react-icons/fi';

import api from '../services/api';

import Button from './button';

import '../assets/styles/newModal.css';

const NewModal = props => {
  const { onClose, process, isEdit = false } = props;

  const [interessado, setInteressado] = useState("");
  const [interessados, setInteressados] = useState([]);
  const [descricao, setDescricao] = useState("");
  const [assunto, setAssunto] = useState("");

  const handleAdd = () => {
    if (interessado.trim() === "") {
      setInteressado("");
    } else {
      setInteressados([...interessados, interessado]);
      setInteressado("");
    }
  }

  const createProcess = async () => {
    if (interessados.length === 0 || descricao.trim() === "" || assunto.trim() === "") {
      toast.error('Todos os campo são obrigatórios!')
      return;
    }
    const processObj = {
      assunto,
      descricao,
      interessados,
    };

    await api.createProcess(processObj);

    onClose();
    toast.success('Processo adicionado com sucesso!')
  }

  const handleRemove = index => {
    const newInteressados = interessados.filter((_, fIndex) => fIndex !== index);
 
    setInteressados(newInteressados);
  };

  useEffect(() => {
    if (process) {
      setAssunto(process.assunto);
      setDescricao(process.descricao);
      setInteressados(process.interessados);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="new-modal-content">
      <div className="new-modal-form">
        <Input value={assunto} onChange={setAssunto} label="Assunto" name="assunto" />
        <div className="interessados">
          <h4>Interessados</h4>
          <ul>
            {interessados.map((item, index) => (
              <div key={index} className="list-item">
                <li>{item}</li>
                <button onClick={() => handleRemove(index)}><FiTrash2 /></button>
              </div>
            ))}
          </ul>
        </div>
        <div className="add-interessados">
          <Input value={interessado} onChange={setInteressado} label="Novo interessado" name="interessados" />
          <Button color="btn-grey" name="ADICIONAR" onClick={handleAdd} />
        </div>
        <Input value={descricao} onChange={setDescricao} type="textarea" label="Descrição" />
      </div>
      <Button color="btn-blue" name="SALVAR" onClick={isEdit ? () => toast.error('Um erro inesperado ocorreu!') : createProcess} />
    </div>
  );
}

export default NewModal;