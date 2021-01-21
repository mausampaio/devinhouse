import '../assets/styles/button.css';

const Button = props => {
  const { color, onClick, name } = props;
  return (
    <button className={`${color} btn`} onClick={onClick} >{name}</button>
  );
}

export default Button;
