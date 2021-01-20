import { useState } from 'react';
import ReactDom from 'react-dom';
import { Link } from 'react-router-dom';

import InputSearch from '../components/inputSearch';
import Modal from '../components/modal';
import NewModal from '../components/newModal';

import '../assets/styles/search.css';

const Search = () => {
  const [isOpen, setIsOpen] = useState(false);

  return ReactDom.createPortal(
    <div className="container">
      <h1>Busca de processos</h1>
      <InputSearch placeholder="Pesquise por uma informação do processo" />
      <p>Você pode criar um novo processo <Link onClick={() => setIsOpen(true)}>clicando aqui</Link>.</p>
      <Modal 
        title="Cadastro de processo" 
        open={isOpen} 
        onClose={() => setIsOpen(false)}
      >
        <NewModal onClose={() => setIsOpen(false)} />
      </Modal>
    </div>,
    document.getElementById('portal')
  );
};

export default Search;
