import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import InputSearch from '../components/inputSearch';
import NewButton from '../components/newButton';
import ProcessesCard from '../components/processesCard';
import Modal from '../components/modal';
import NewModal from '../components/newModal';
import ProcessDetails from '../components/processDetails';

import api from '../services/api';

import '../assets/styles/processos.css';

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const Processos = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [processes, setProcesses] = useState([]);
  const [isClicked, setIsClicked] = useState(false);
  const [processId, setProcessId] = useState("");
  const query = useQuery();
  const location = useLocation();

  const handleCardClick = id => {
    if (id === processId && isClicked) {
      return;
    } 
    setIsClicked(!isClicked);

    setProcessId(id);
  };

  useEffect(() => {
    const getProcess = async () => {
      const result = await api.searchProcesses(query.get("q"));
  
      console.log(result)
      setProcesses(result);
    };
    getProcess();
  }, [location]);

  return (
    <>
      <header>
        <p>Busca de processos</p>
        <InputSearch value={query.get("q")} placeholder="Pesquise por uma informação do processo" />
        <NewButton onClick={() => setIsOpen(true)} />
      </header>
      <div className="processes-container">
        <div className="processes-cards">
          {processes.map(process => (
            <ProcessesCard 
              process={process}
              isClicked={isClicked}
              onClick={() => handleCardClick(process.id)}
            />
          ))}
        </div>
        {isClicked &&
          <div className="process-details">
            <ProcessDetails />
          </div>
        }
      </div>
      <Modal 
        title="Cadastro de processo" 
        open={isOpen} 
        onClose={() => setIsOpen(false)}
      >
        <NewModal onClose={() => setIsOpen(false)} />
      </Modal>
    </>
  );
};

export default Processos;
