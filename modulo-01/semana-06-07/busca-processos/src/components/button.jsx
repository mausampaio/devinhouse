import '../assets/styles/button.css';

const Button = props => {
  const { color, onClick } = props;
  return (
    <button className={`${color} btn`} onClick={onClick} >ADICIONAR</button>
  );
}

export default Button;
