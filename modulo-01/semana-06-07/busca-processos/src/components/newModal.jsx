import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

import api from '../services/api';

import Input from './input';
import Button from './button';
import InputInteressados from './inputInteressados';

import '../assets/styles/newModal.css';

const NewModal = props => {
  const { onClose, process, isEdit = false } = props;

  const [interessado, setInteressado] = useState("");
  const [interessados, setInteressados] = useState([]);
  const [descricao, setDescricao] = useState("");
  const [assunto, setAssunto] = useState("");

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
        <Input 
          value={assunto}
          onChange={setAssunto}
          label="Assunto"
          name="assunto"
        />
        <InputInteressados
          interessado={interessado}
          interessados={interessados}
          setInteressado={setInteressado}
          setInteressados={setInteressados}
        />
        <Input 
          value={descricao}
          onChange={setDescricao}
          type="textarea" label="Descrição"
        />
      </div>
      <Button
        color="btn-blue"
        name="SALVAR"
        onClick={isEdit ? () => toast.error('Um erro inesperado ocorreu!') : createProcess}
      />
    </div>
  );
}

export default NewModal;