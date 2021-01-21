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
  const [process, setProcess] = useState({});
  const [isClicked, setIsClicked] = useState(false);
  const [isRemoved, setIsRemoved] = useState(false);
  const [processId, setProcessId] = useState("");
  const query = useQuery();
  const location = useLocation();

  const handleCardClick = id => {
    if (id === processId && isClicked) {
      return;
    } 
    setIsClicked(true);

    setProcessId(id);

    getProcess(id);
  };

  const getProcess = async id => {
    const result = await api.getProcess(id);

    setProcess(result);
  };

  useEffect(() => {
    const getProcesses = async () => {
      const result = await api.searchProcesses(query.get("q"));
 
      setProcesses(result);
    };

    getProcesses();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location, isRemoved]);

  return (
    <>
      <header>
        <p>Busca de processos</p>
        <InputSearch value={query.get("q")} placeholder="Pesquise por uma informação do processo" />
        <NewButton onClick={() => setIsOpen(true)} />
      </header>
      <div className="processes-container">
        <div className="processes-cards">
          {processes.map(mapProcess => (
            <ProcessesCard 
              process={mapProcess}
              isClicked={isClicked}
              onClick={() => handleCardClick(mapProcess.id)}
              key={mapProcess.id}
            />
          ))}
        </div>
        {isClicked &&
          <div className="process-details">
            <ProcessDetails 
              process={process}
              isClicked={setIsClicked}
              isRemoved={setIsRemoved}
            />
          </div>
        }
      </div>
      <Modal 
        title="Cadastro de processo" 
        open={isOpen} 
        onClose={() => setIsOpen(false)}
      >
        <NewModal
          onClose={() => setIsOpen(false)}
        />
      </Modal>
    </>
  );
};

export default Processos;
