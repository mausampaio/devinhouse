import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import InputSearch from '../components/inputSearch';
import NewButton from '../components/newButton';
import CardProcesso from '../components/cardProcesso';
import api from '../services/api';

import '../assets/styles/processos.css';

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const Processos = () => {
  const [processes, setProcesses] = useState([]);
  const query = useQuery();

  const getProcess = async () => {
    const result = await api.getAllProcesses();

    console.log(result)
    setProcesses(result);
  };

  useEffect(() => {
    getProcess();
  }, []);

  return (
    <>
      <header>
        <p>Busca de processos</p>
        <InputSearch value={query.get("q")} placeholder="Pesquise por uma informação do processo" />
        <NewButton />
      </header>
      <CardProcesso processes={processes} />
    </>
  );
};

export default Processos;
