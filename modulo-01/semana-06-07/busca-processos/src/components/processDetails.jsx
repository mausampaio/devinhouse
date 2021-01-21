import Processos from "../pages/processos"

import '../assets/styles/processDetails.css';

import placeholder120 from '../assets/images/placeholder_120.png';

const ProcessDetails = () => {
  return (
    <div className="process-details-container">
      <header>
        <img src={placeholder120} alt="placeholder"/>
        <div className="header-content">
          <div className="processo">
            <h4>Processo</h4>
            <p>SOFT 0001/2018</p>
          </div>
          <div className="data">
            <h4>Data</h4>
            <p>07/08/2018</p>
          </div>
          <div className="assunto">
            <h4>Assunto</h4>
            <p>In vestibulum dis laroque Ac parturient dapibu</p>
          </div>
        </div>
        <span className="close">&times;</span>
      </header>
      <div className="process-details-interessados">
        <h4>Interessados</h4>
        <ul>
          <li>Danilo Barbosa Correia</li>
          <li>Danilo Barbosa Correia</li>
          <li>Danilo Barbosa Correia</li>
          <li>Danilo Barbosa Correia</li>
          <li>Danilo Barbosa Correia</li>
          <li>Danilo Barbosa Correia</li>
        </ul>
      </div>
      <div className="process-details-descricao">
        <h4>Descrição</h4>
        <p>Vehicula ullamcorper leo ullamcorper arcu dui a hendrerit vestibulum cum ut adipiscing a parturient consectetur eget adipiscing eu. Mi nisl potenti adipiscing cursus vehicula a parturient maecenas a a blandit per pulvinar accumsan natoque aliquam quisque ipsum a rhoncus ornare condimentum porta mattis dui cursus a. Eros velit lacus erat vestibulum elementum ut sociosqu iaculis parturient consequat luctus felis proin congue suspendisse placerat netus. Eu a ante ante ac sit vel magna a est eu a ullamcorper elementum porta urna parturient nullam adipiscing urna sem elit convallis. Fusce in lectus dapibus a condimentum dis phasellus justo ullamcorper nisl risus nisi placerat viverra id egestas ad auctor ac dui. 

        A parturient rhoncus cras commodo dictum nulla ante morbi a cras ut natoque metus nam neque turpis a semper. Enim nullam rhoncus cubilia faucibus quam parturient id ornare purus ipsum inceptos consectetur phasellus id adipiscing pulvinar dignissim a phasellus vestibulum magna sodales libero hac quam hac nullam. Arcu a venenatis eleifend dui mus dignissim litora praesent morbi vel ipsum nam a at quam. Ullamcorper dictum magnis enim sodales ante fermentum parturient volutpat dolor cum parturient praesent parturient scelerisque in a feugiat elementum commodo. Montes a placerat per senectus odio primis enim mollis ac odio a a suspendisse orci adipiscing dis.</p>
      </div>
    </div>
  );
}

export default ProcessDetails;
