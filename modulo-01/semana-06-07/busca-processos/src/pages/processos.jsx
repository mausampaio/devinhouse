import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import InputSearch from '../components/inputSearch';
import NewButton from '../components/newButton';
import ProcessesCard from '../components/processesCard';
import api from '../services/api';

import '../assets/styles/processos.css';

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const Processos = () => {
  const [processes, setProcesses] = useState([]);
  const query = useQuery();
  const location = useLocation();

  useEffect(() => {
    const getProcess = async () => {
      const result = await api.searchProcesses(query.get("q"));
  
      console.log(result)
      setProcesses(result);
    };
    getProcess();
  }, [location, query]);

  return (
    <>
      <header>
        <p>Busca de processos</p>
        <InputSearch value={query.get("q")} placeholder="Pesquise por uma informação do processo" />
        <NewButton />
      </header>
      {processes.map(process => (
        <ProcessesCard process={process} />
      ))}
    </>
  );
};

export default Processos;
