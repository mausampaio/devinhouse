import { FiTrash2 } from 'react-icons/fi';

import Input from './input';
import Button from './button';

import '../assets/styles/inputInteressados.css';

const InputInteressados = props => {
  const { interessado, interessados, setInteressado, setInteressados } = props;

  const handleAdd = () => {
    if (interessado.trim() === "") {
      setInteressado("");
    } else {
      setInteressados([...interessados, interessado]);
      setInteressado("");
    }
  }

  const handleRemove = index => {
    const newInteressados = interessados.filter((_, fIndex) => fIndex !== index);
 
    setInteressados(newInteressados);
  };

  return (
    <>
      <div className="interessados">
        <h4>Interessados</h4>
        <ul>
          {interessados.map((item, index) => (
            <div key={index} className="list-item">
              <li>{item}</li>
              <button onClick={() => handleRemove(index)}><FiTrash2 /></button>
            </div>
          ))}
        </ul>
      </div>
      <div className="add-interessados">
        <Input value={interessado} onChange={setInteressado} label="Novo interessado" name="interessados" />
        <Button color="btn-grey" name="ADICIONAR" onClick={handleAdd} />
      </div>
    </>
  );
}

export default InputInteressados;
