import '../assets/styles/newButton.css';

const NewButton = props => {
  const { onClick } = props;
  return (
    <button onClick={onClick}>
      NOVO
    </button>
  );
};

export default NewButton;
