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
  const [isRemoved, setIsRemoved] = useState(false);
  const [processId, setProcessId] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const query = useQuery();
  const location = useLocation();

  const handleCardClick = id => {
    if (id === processId && isClicked) {
      return setIsClicked(false);
    } 
    setIsClicked(true);

    setProcessId(id);
  };

  useEffect(() => {
    const getProcesses = async () => {
      const result = await api.searchProcesses(query.get("search"));
      
      setProcesses(result);
    };
    
    if (query.get("search") === null || query.get("search").trim() !== "") {
      setSearchTerm(query.get("search"));
      getProcesses();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location, isRemoved]);

  return (
    <>
      <header>
        <p>Busca de processos</p>
        <InputSearch
          value={searchTerm}
          placeholder="Pesquise por uma informação do processo"
        />
        <NewButton
          onClick={() => setIsOpen(true)}
        />
      </header>
      {query.get("search") === null || query.get("search").trim() === "" ?
        <div className="process-container">
          <p className="search-result">Nenhum resultado encontrado...</p>
        </div>
      :
        <div className="processes-container">
          <div className={`processes-cards ${isClicked && 'clicked'}`}>
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
                processId={processId}
                isClicked={setIsClicked}
                isRemoved={setIsRemoved}
              />
            </div>
          }
        </div>
      }
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
