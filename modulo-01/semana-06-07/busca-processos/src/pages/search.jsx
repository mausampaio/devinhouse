import { useState } from 'react';
import ReactDom from 'react-dom';
import { Link } from 'react-router-dom';

import InputSearch from '../components/inputSearch';
import Modal from '../components/modal';

import '../assets/styles/search.css';

const Search = () => {
  const [isOpen, setIsOpen] = useState(false);

  return ReactDom.createPortal(
    <div className="container">
      <h1>Busca de processos</h1>
      <InputSearch placeholder="Pesquise por uma informação do processo" />
      <p>Você pode criar um novo processo <Link onClick={() => setIsOpen(true)}>clicando aqui</Link>.</p>
      <Modal open={isOpen} onClose={() => setIsOpen(false)}>
        <p>Some text in the Modal..</p>
      </Modal>
    </div>,
    document.getElementById('portal')
  );
};

export default Search;
