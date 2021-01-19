import InputSearch from '../components/inputSearch';
import NewButton from '../components/newButton';
import CardProcesso from '../components/cardProcesso';

import '../assets/styles/processos.css';

const Processos = () => {
  return (
    <>
      <header>
        <p>Busca de processos</p>
        <InputSearch placeholder="Pesquise por uma informação do processo" />
        <NewButton />
      </header>
      <CardProcesso process={{
        "id": "50911ef1-8dc1-404e-8fbd-49c8590b666c",
        "numero": "SOFT 2021/00001",
        "entrada": "19/12/2019",
        "interessados": [
          "João da Silva"
        ],
        "descricao": "Solicitação de licença-prêmio referente ao período 02/06/2015 - 01/06/2018",
        "assunto": "Licença"
      }} />
    </>
  );
};

export default Processos;
