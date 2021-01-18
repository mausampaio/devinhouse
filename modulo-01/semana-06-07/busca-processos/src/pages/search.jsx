import { Link } from 'react-router-dom';

import InputSearch from "../components/inputSearch";

import '../assets/styles/search.css';

const Search = () => {
  return (
    <div className="container">
      <h1>Busca de processos</h1>
      <InputSearch placeholder="Pesquise por uma informação do processo" />
      <p>Você pode criar um novo processo <Link to="/">clicando aqui</Link>.</p>
    </div>
  );
};

export default Search;
